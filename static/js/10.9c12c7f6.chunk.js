/*!For license information please see 10.9c12c7f6.chunk.js.LICENSE.txt*/
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
    [10], {
        1057: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6365);

            function i(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function s(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function u(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function l(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h(e / 4294967296 >>> 0, t, r), h(e >>> 0, t, r + 4), t
            }

            function f(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e >>> 0, t, r), l(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = i, t.writeInt16BE = i, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = h, t.writeInt32BE = h, t.writeUint32LE = l, t.writeInt32LE = l, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = o(e, t),
                    n = o(e, t + 4);
                return 4294967296 * r + n - 4294967296 * (n >> 31)
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r - 4294967296 * (r >> 31)
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = u(e, t);
                return 4294967296 * u(e, t + 4) + r
            }, t.writeUint64BE = p, t.writeInt64BE = p, t.writeUint64LE = f, t.writeInt64LE = f, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
                for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--) n += t[s] * i, i *= 256;
                return n
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
                for (var n = 0, i = 1, s = r; s < r + e / 8; s++) n += t[s] * i, i *= 256;
                return n
            }, t.writeUintBE = function(e, t, r, i) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
                for (var s = 1, o = e / 8 + i - 1; o >= i; o--) r[o] = t / s & 255, s *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, i) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
                for (var s = 1, o = i; o < i + e / 8; o++) r[o] = t / s & 255, s *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        3403: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(1057),
                i = r(4377),
                s = 20;

            function o(e, t, r) {
                for (var i = 1634760805, o = 857760878, a = 2036477234, c = 1797285236, u = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], p = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], d = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], g = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], y = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], v = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], m = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], w = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], b = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], _ = i, E = o, I = a, S = c, O = u, P = h, N = l, A = p, R = f, T = d, x = g, C = y, U = v, j = m, D = w, L = b, M = 0; M < s; M += 2) O = (O ^= R = R + (U = (U ^= _ = _ + O | 0) >>> 16 | U << 16) | 0) >>> 20 | O << 12, P = (P ^= T = T + (j = (j ^= E = E + P | 0) >>> 16 | j << 16) | 0) >>> 20 | P << 12, N = (N ^= x = x + (D = (D ^= I = I + N | 0) >>> 16 | D << 16) | 0) >>> 20 | N << 12, A = (A ^= C = C + (L = (L ^= S = S + A | 0) >>> 16 | L << 16) | 0) >>> 20 | A << 12, N = (N ^= x = x + (D = (D ^= I = I + N | 0) >>> 24 | D << 8) | 0) >>> 25 | N << 7, A = (A ^= C = C + (L = (L ^= S = S + A | 0) >>> 24 | L << 8) | 0) >>> 25 | A << 7, P = (P ^= T = T + (j = (j ^= E = E + P | 0) >>> 24 | j << 8) | 0) >>> 25 | P << 7, O = (O ^= R = R + (U = (U ^= _ = _ + O | 0) >>> 24 | U << 8) | 0) >>> 25 | O << 7, P = (P ^= x = x + (L = (L ^= _ = _ + P | 0) >>> 16 | L << 16) | 0) >>> 20 | P << 12, N = (N ^= C = C + (U = (U ^= E = E + N | 0) >>> 16 | U << 16) | 0) >>> 20 | N << 12, A = (A ^= R = R + (j = (j ^= I = I + A | 0) >>> 16 | j << 16) | 0) >>> 20 | A << 12, O = (O ^= T = T + (D = (D ^= S = S + O | 0) >>> 16 | D << 16) | 0) >>> 20 | O << 12, A = (A ^= R = R + (j = (j ^= I = I + A | 0) >>> 24 | j << 8) | 0) >>> 25 | A << 7, O = (O ^= T = T + (D = (D ^= S = S + O | 0) >>> 24 | D << 8) | 0) >>> 25 | O << 7, N = (N ^= C = C + (U = (U ^= E = E + N | 0) >>> 24 | U << 8) | 0) >>> 25 | N << 7, P = (P ^= x = x + (L = (L ^= _ = _ + P | 0) >>> 24 | L << 8) | 0) >>> 25 | P << 7;
                n.writeUint32LE(_ + i | 0, e, 0), n.writeUint32LE(E + o | 0, e, 4), n.writeUint32LE(I + a | 0, e, 8), n.writeUint32LE(S + c | 0, e, 12), n.writeUint32LE(O + u | 0, e, 16), n.writeUint32LE(P + h | 0, e, 20), n.writeUint32LE(N + l | 0, e, 24), n.writeUint32LE(A + p | 0, e, 28), n.writeUint32LE(R + f | 0, e, 32), n.writeUint32LE(T + d | 0, e, 36), n.writeUint32LE(x + g | 0, e, 40), n.writeUint32LE(C + y | 0, e, 44), n.writeUint32LE(U + v | 0, e, 48), n.writeUint32LE(j + m | 0, e, 52), n.writeUint32LE(D + w | 0, e, 56), n.writeUint32LE(L + b | 0, e, 60)
            }

            function a(e, t, r, n, s) {
                if (void 0 === s && (s = 0), 32 !== e.length) throw new Error("ChaCha: key size must be 32 bytes");
                if (n.length < r.length) throw new Error("ChaCha: destination is shorter than source");
                var a, u;
                if (0 === s) {
                    if (8 !== t.length && 12 !== t.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
                    u = (a = new Uint8Array(16)).length - t.length, a.set(t, u)
                } else {
                    if (16 !== t.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, u = s
                }
                for (var h = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    o(h, a, e);
                    for (var p = l; p < l + 64 && p < r.length; p++) n[p] = r[p] ^ h[p - l];
                    c(a, 0, u)
                }
                return i.wipe(h), 0 === s && i.wipe(a), n
            }

            function c(e, t, r) {
                for (var n = 1; r--;) n = n + (255 & e[t]) | 0, e[t] = 255 & n, n >>>= 8, t++;
                if (n > 0) throw new Error("ChaCha: counter overflow")
            }
            t.streamXOR = a, t.stream = function(e, t, r, n) {
                return void 0 === n && (n = 0), i.wipe(r), a(e, t, r, r, n)
            }
        },
        4969: (e, t, r) => {
            "use strict";
            var n = r(3403),
                i = r(6785),
                s = r(4377),
                o = r(1057),
                a = r(9289);
            t.J4 = 32, t.PX = 12, t.iW = 16;
            var c = new Uint8Array(16),
                u = function() {
                    function e(e) {
                        if (this.nonceLength = t.PX, this.tagLength = t.iW, e.length !== t.J4) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, i) {
                        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                        var o = new Uint8Array(16);
                        o.set(e, o.length - e.length);
                        var a = new Uint8Array(32);
                        n.stream(this._key, o, a, 4);
                        var c, u = t.length + this.tagLength;
                        if (i) {
                            if (i.length !== u) throw new Error("ChaCha20Poly1305: incorrect destination length");
                            c = i
                        } else c = new Uint8Array(u);
                        return n.streamXOR(this._key, o, t, c, 4), this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), r), s.wipe(o), c
                    }, e.prototype.open = function(e, t, r, i) {
                        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o = new Uint8Array(16);
                        o.set(e, o.length - e.length);
                        var c = new Uint8Array(32);
                        n.stream(this._key, o, c, 4);
                        var u = new Uint8Array(this.tagLength);
                        if (this._authenticate(u, c, t.subarray(0, t.length - this.tagLength), r), !a.equal(u, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var h, l = t.length - this.tagLength;
                        if (i) {
                            if (i.length !== l) throw new Error("ChaCha20Poly1305: incorrect destination length");
                            h = i
                        } else h = new Uint8Array(l);
                        return n.streamXOR(this._key, o, t.subarray(0, t.length - this.tagLength), h, 4), s.wipe(o), h
                    }, e.prototype.clean = function() {
                        return s.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, n) {
                        var a = new i.Poly1305(t);
                        n && (a.update(n), n.length % 16 > 0 && a.update(c.subarray(n.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var u = new Uint8Array(8);
                        n && o.writeUint64LE(n.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
                        for (var h = a.digest(), l = 0; l < h.length; l++) e[l] = h[l];
                        a.clean(), s.wipe(h), s.wipe(u)
                    }, e
                }();
            t.g6 = u
        },
        9289: (e, t) => {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        3829: (e, t, r) => {
            "use strict";
            t._S = t.K = t.TP = t.wE = t.Ee = void 0;
            const n = r(4993),
                i = r(7787),
                s = r(4377);

            function o(e) {
                const t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.Ee = 64, t.wE = 64, t.TP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                h = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function g(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let n = e[r] + t + 65535;
                    t = Math.floor(n / 65536), e[r] = n - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function y(e, t, r) {
                const n = ~(r - 1);
                for (let i = 0; i < 16; i++) {
                    const r = n & (e[i] ^ t[i]);
                    e[i] ^= r, t[i] ^= r
                }
            }

            function v(e, t) {
                const r = o(),
                    n = o();
                for (let i = 0; i < 16; i++) n[i] = t[i];
                g(n), g(n), g(n);
                for (let i = 0; i < 2; i++) {
                    r[0] = n[0] - 65517;
                    for (let t = 1; t < 15; t++) r[t] = n[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
                    r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                    const e = r[15] >> 16 & 1;
                    r[14] &= 65535, y(n, r, 1 - e)
                }
                for (let i = 0; i < 16; i++) e[2 * i] = 255 & n[i], e[2 * i + 1] = n[i] >> 8
            }

            function m(e, t) {
                let r = 0;
                for (let n = 0; n < 32; n++) r |= e[n] ^ t[n];
                return (1 & r - 1 >>> 8) - 1
            }

            function w(e, t) {
                const r = new Uint8Array(32),
                    n = new Uint8Array(32);
                return v(r, e), v(n, t), m(r, n)
            }

            function b(e) {
                const t = new Uint8Array(32);
                return v(t, e), 1 & t[0]
            }

            function _(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function E(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function I(e, t, r) {
                let n, i, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    b = 0,
                    _ = 0,
                    E = 0,
                    I = 0,
                    S = 0,
                    O = 0,
                    P = 0,
                    N = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    x = 0,
                    C = 0,
                    U = 0,
                    j = 0,
                    D = 0,
                    L = r[0],
                    M = r[1],
                    k = r[2],
                    q = r[3],
                    z = r[4],
                    H = r[5],
                    V = r[6],
                    B = r[7],
                    F = r[8],
                    K = r[9],
                    W = r[10],
                    J = r[11],
                    G = r[12],
                    Y = r[13],
                    Q = r[14],
                    $ = r[15];
                n = t[0], s += n * L, o += n * M, a += n * k, c += n * q, u += n * z, h += n * H, l += n * V, p += n * B, f += n * F, d += n * K, g += n * W, y += n * J, v += n * G, m += n * Y, w += n * Q, b += n * $, n = t[1], o += n * L, a += n * M, c += n * k, u += n * q, h += n * z, l += n * H, p += n * V, f += n * B, d += n * F, g += n * K, y += n * W, v += n * J, m += n * G, w += n * Y, b += n * Q, _ += n * $, n = t[2], a += n * L, c += n * M, u += n * k, h += n * q, l += n * z, p += n * H, f += n * V, d += n * B, g += n * F, y += n * K, v += n * W, m += n * J, w += n * G, b += n * Y, _ += n * Q, E += n * $, n = t[3], c += n * L, u += n * M, h += n * k, l += n * q, p += n * z, f += n * H, d += n * V, g += n * B, y += n * F, v += n * K, m += n * W, w += n * J, b += n * G, _ += n * Y, E += n * Q, I += n * $, n = t[4], u += n * L, h += n * M, l += n * k, p += n * q, f += n * z, d += n * H, g += n * V, y += n * B, v += n * F, m += n * K, w += n * W, b += n * J, _ += n * G, E += n * Y, I += n * Q, S += n * $, n = t[5], h += n * L, l += n * M, p += n * k, f += n * q, d += n * z, g += n * H, y += n * V, v += n * B, m += n * F, w += n * K, b += n * W, _ += n * J, E += n * G, I += n * Y, S += n * Q, O += n * $, n = t[6], l += n * L, p += n * M, f += n * k, d += n * q, g += n * z, y += n * H, v += n * V, m += n * B, w += n * F, b += n * K, _ += n * W, E += n * J, I += n * G, S += n * Y, O += n * Q, P += n * $, n = t[7], p += n * L, f += n * M, d += n * k, g += n * q, y += n * z, v += n * H, m += n * V, w += n * B, b += n * F, _ += n * K, E += n * W, I += n * J, S += n * G, O += n * Y, P += n * Q, N += n * $, n = t[8], f += n * L, d += n * M, g += n * k, y += n * q, v += n * z, m += n * H, w += n * V, b += n * B, _ += n * F, E += n * K, I += n * W, S += n * J, O += n * G, P += n * Y, N += n * Q, A += n * $, n = t[9], d += n * L, g += n * M, y += n * k, v += n * q, m += n * z, w += n * H, b += n * V, _ += n * B, E += n * F, I += n * K, S += n * W, O += n * J, P += n * G, N += n * Y, A += n * Q, R += n * $, n = t[10], g += n * L, y += n * M, v += n * k, m += n * q, w += n * z, b += n * H, _ += n * V, E += n * B, I += n * F, S += n * K, O += n * W, P += n * J, N += n * G, A += n * Y, R += n * Q, T += n * $, n = t[11], y += n * L, v += n * M, m += n * k, w += n * q, b += n * z, _ += n * H, E += n * V, I += n * B, S += n * F, O += n * K, P += n * W, N += n * J, A += n * G, R += n * Y, T += n * Q, x += n * $, n = t[12], v += n * L, m += n * M, w += n * k, b += n * q, _ += n * z, E += n * H, I += n * V, S += n * B, O += n * F, P += n * K, N += n * W, A += n * J, R += n * G, T += n * Y, x += n * Q, C += n * $, n = t[13], m += n * L, w += n * M, b += n * k, _ += n * q, E += n * z, I += n * H, S += n * V, O += n * B, P += n * F, N += n * K, A += n * W, R += n * J, T += n * G, x += n * Y, C += n * Q, U += n * $, n = t[14], w += n * L, b += n * M, _ += n * k, E += n * q, I += n * z, S += n * H, O += n * V, P += n * B, N += n * F, A += n * K, R += n * W, T += n * J, x += n * G, C += n * Y, U += n * Q, j += n * $, n = t[15], b += n * L, _ += n * M, E += n * k, I += n * q, S += n * z, O += n * H, P += n * V, N += n * B, A += n * F, R += n * K, T += n * W, x += n * J, C += n * G, U += n * Y, j += n * Q, D += n * $, s += 38 * _, o += 38 * E, a += 38 * I, c += 38 * S, u += 38 * O, h += 38 * P, l += 38 * N, p += 38 * A, f += 38 * R, d += 38 * T, g += 38 * x, y += 38 * C, v += 38 * U, m += 38 * j, w += 38 * D, i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = h, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = w, e[15] = b
            }

            function S(e, t) {
                I(e, t, t)
            }

            function O(e, t) {
                const r = o();
                let n;
                for (n = 0; n < 16; n++) r[n] = t[n];
                for (n = 253; n >= 0; n--) S(r, r), 2 !== n && 4 !== n && I(r, r, t);
                for (n = 0; n < 16; n++) e[n] = r[n]
            }

            function P(e, t) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    u = o(),
                    l = o(),
                    p = o();
                E(r, e[1], e[0]), E(p, t[1], t[0]), I(r, r, p), _(n, e[0], e[1]), _(p, t[0], t[1]), I(n, n, p), I(i, e[3], t[3]), I(i, i, h), I(s, e[2], t[2]), _(s, s, s), E(a, n, r), E(c, s, i), _(u, s, i), _(l, n, r), I(e[0], a, c), I(e[1], l, u), I(e[2], u, c), I(e[3], a, l)
            }

            function N(e, t, r) {
                for (let n = 0; n < 4; n++) y(e[n], t[n], r)
            }

            function A(e, t) {
                const r = o(),
                    n = o(),
                    i = o();
                O(i, t[2]), I(r, t[0], i), I(n, t[1], i), v(e, n), e[31] ^= b(r) << 7
            }

            function R(e, t, r) {
                d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a);
                for (let n = 255; n >= 0; --n) {
                    const i = r[n / 8 | 0] >> (7 & n) & 1;
                    N(e, t, i), P(t, e), P(e, e), N(e, t, i)
                }
            }

            function T(e, t) {
                const r = [o(), o(), o(), o()];
                d(r[0], l), d(r[1], p), d(r[2], c), I(r[3], l, p), R(e, r, t)
            }

            function x(e) {
                if (e.length !== t.TP) throw new Error("ed25519: seed must be ".concat(t.TP, " bytes"));
                const r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                const n = new Uint8Array(32),
                    s = [o(), o(), o(), o()];
                T(s, r), A(n, s);
                const a = new Uint8Array(64);
                return a.set(e), a.set(n, 32), {
                    publicKey: n,
                    secretKey: a
                }
            }
            t.K = x;
            const C = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function U(e, t) {
                let r, n, i, s;
                for (n = 63; n >= 32; --n) {
                    for (r = 0, i = n - 32, s = n - 12; i < s; ++i) t[i] += r - 16 * t[n] * C[i - (n - 32)], r = Math.floor((t[i] + 128) / 256), t[i] -= 256 * r;
                    t[i] += r, t[n] = 0
                }
                for (r = 0, i = 0; i < 32; i++) t[i] += r - (t[31] >> 4) * C[i], r = t[i] >> 8, t[i] &= 255;
                for (i = 0; i < 32; i++) t[i] -= r * C[i];
                for (n = 0; n < 32; n++) t[n + 1] += t[n] >> 8, e[n] = 255 & t[n]
            }

            function j(e) {
                const t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let r = 0; r < 64; r++) e[r] = 0;
                U(e, t)
            }

            function D(e, t) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    h = o(),
                    l = o(),
                    p = o();
                return d(e[2], c),
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(e[1], t), S(i, e[1]), I(s, i, u), E(i, i, e[2]), _(s, e[2], s), S(h, s), S(l, h), I(p, l, h), I(r, p, i), I(r, r, s),
                    function(e, t) {
                        const r = o();
                        let n;
                        for (n = 0; n < 16; n++) r[n] = t[n];
                        for (n = 250; n >= 0; n--) S(r, r), 1 !== n && I(r, r, t);
                        for (n = 0; n < 16; n++) e[n] = r[n]
                    }(r, r), I(r, r, i), I(r, r, s), I(r, r, s), I(e[0], r, s), S(n, e[0]), I(n, n, s), w(n, i) && I(e[0], e[0], f), S(n, e[0]), I(n, n, s), w(n, i) ? -1 : (b(e[0]) === t[31] >> 7 && E(e[0], a, e[0]), I(e[3], e[0], e[1]), 0)
            }
            t._S = function(e, t) {
                const r = new Float64Array(64),
                    n = [o(), o(), o(), o()],
                    s = (0, i.hash)(e.subarray(0, 32));
                s[0] &= 248, s[31] &= 127, s[31] |= 64;
                const a = new Uint8Array(64);
                a.set(s.subarray(32), 32);
                const c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                const u = c.digest();
                c.clean(), j(u), T(n, u), A(a, n), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                const h = c.digest();
                j(h);
                for (let i = 0; i < 32; i++) r[i] = u[i];
                for (let i = 0; i < 32; i++)
                    for (let e = 0; e < 32; e++) r[i + e] += h[i] * s[e];
                return U(a.subarray(32), r), a
            }
        },
        7895: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return "undefined" !== typeof e.saveState && "undefined" !== typeof e.restoreState && "undefined" !== typeof e.cleanSavedState
            }
        },
        3869: (e, t, r) => {
            "use strict";
            var n = r(7081),
                i = r(4377),
                s = function() {
                    function e(e, t, r, i) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
                        var s = n.hmac(this._hash, r, t);
                        this._hmac = new n.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw new Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.i = s
        },
        7081: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7895),
                i = r(9289),
                s = r(4377),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var i = 0; i < r.length; i++) r[i] ^= 54;
                        this._inner.update(r);
                        for (i = 0; i < r.length; i++) r[i] ^= 106;
                        this._outer.update(r), n.isSerializableHash(this._inner) && n.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var n = new o(e, t);
                n.update(r);
                var i = n.digest();
                return n.clean(), i
            }, t.equal = i.equal
        },
        6365: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    n = 65535 & t;
                return r * n + ((e >>> 16 & 65535) * n + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" === typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        6785: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9289),
                i = r(4377);
            t.DIGEST_LENGTH = 16;
            var s = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var n = e[2] | e[3] << 8;
                    this._r[1] = 8191 & (r >>> 13 | n << 3);
                    var i = e[4] | e[5] << 8;
                    this._r[2] = 7939 & (n >>> 10 | i << 6);
                    var s = e[6] | e[7] << 8;
                    this._r[3] = 8191 & (i >>> 7 | s << 9);
                    var o = e[8] | e[9] << 8;
                    this._r[4] = 255 & (s >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = 8191 & (o >>> 14 | a << 2);
                    var c = e[12] | e[13] << 8;
                    this._r[7] = 8065 & (a >>> 11 | c << 5);
                    var u = e[14] | e[15] << 8;
                    this._r[8] = 8191 & (c >>> 8 | u << 8), this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var n = this._fin ? 0 : 2048, i = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], h = this._h[6], l = this._h[7], p = this._h[8], f = this._h[9], d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], m = this._r[4], w = this._r[5], b = this._r[6], _ = this._r[7], E = this._r[8], I = this._r[9]; r >= 16;) {
                        var S = e[t + 0] | e[t + 1] << 8;
                        i += 8191 & S;
                        var O = e[t + 2] | e[t + 3] << 8;
                        s += 8191 & (S >>> 13 | O << 3);
                        var P = e[t + 4] | e[t + 5] << 8;
                        o += 8191 & (O >>> 10 | P << 6);
                        var N = e[t + 6] | e[t + 7] << 8;
                        a += 8191 & (P >>> 7 | N << 9);
                        var A = e[t + 8] | e[t + 9] << 8;
                        c += 8191 & (N >>> 4 | A << 12), u += A >>> 1 & 8191;
                        var R = e[t + 10] | e[t + 11] << 8;
                        h += 8191 & (A >>> 14 | R << 2);
                        var T = e[t + 12] | e[t + 13] << 8;
                        l += 8191 & (R >>> 11 | T << 5);
                        var x = e[t + 14] | e[t + 15] << 8,
                            C = 0,
                            U = C;
                        U += i * d, U += s * (5 * I), U += o * (5 * E), U += a * (5 * _), C = (U += c * (5 * b)) >>> 13, U &= 8191, U += u * (5 * w), U += h * (5 * m), U += l * (5 * v), U += (p += 8191 & (T >>> 8 | x << 8)) * (5 * y);
                        var j = C += (U += (f += x >>> 5 | n) * (5 * g)) >>> 13;
                        j += i * g, j += s * d, j += o * (5 * I), j += a * (5 * E), C = (j += c * (5 * _)) >>> 13, j &= 8191, j += u * (5 * b), j += h * (5 * w), j += l * (5 * m), j += p * (5 * v), C += (j += f * (5 * y)) >>> 13, j &= 8191;
                        var D = C;
                        D += i * y, D += s * g, D += o * d, D += a * (5 * I), C = (D += c * (5 * E)) >>> 13, D &= 8191, D += u * (5 * _), D += h * (5 * b), D += l * (5 * w), D += p * (5 * m);
                        var L = C += (D += f * (5 * v)) >>> 13;
                        L += i * v, L += s * y, L += o * g, L += a * d, C = (L += c * (5 * I)) >>> 13, L &= 8191, L += u * (5 * E), L += h * (5 * _), L += l * (5 * b), L += p * (5 * w);
                        var M = C += (L += f * (5 * m)) >>> 13;
                        M += i * m, M += s * v, M += o * y, M += a * g, C = (M += c * d) >>> 13, M &= 8191, M += u * (5 * I), M += h * (5 * E), M += l * (5 * _), M += p * (5 * b);
                        var k = C += (M += f * (5 * w)) >>> 13;
                        k += i * w, k += s * m, k += o * v, k += a * y, C = (k += c * g) >>> 13, k &= 8191, k += u * d, k += h * (5 * I), k += l * (5 * E), k += p * (5 * _);
                        var q = C += (k += f * (5 * b)) >>> 13;
                        q += i * b, q += s * w, q += o * m, q += a * v, C = (q += c * y) >>> 13, q &= 8191, q += u * g, q += h * d, q += l * (5 * I), q += p * (5 * E);
                        var z = C += (q += f * (5 * _)) >>> 13;
                        z += i * _, z += s * b, z += o * w, z += a * m, C = (z += c * v) >>> 13, z &= 8191, z += u * y, z += h * g, z += l * d, z += p * (5 * I);
                        var H = C += (z += f * (5 * E)) >>> 13;
                        H += i * E, H += s * _, H += o * b, H += a * w, C = (H += c * m) >>> 13, H &= 8191, H += u * v, H += h * y, H += l * g, H += p * d;
                        var V = C += (H += f * (5 * I)) >>> 13;
                        V += i * I, V += s * E, V += o * _, V += a * b, C = (V += c * w) >>> 13, V &= 8191, V += u * m, V += h * v, V += l * y, V += p * g, i = U = 8191 & (C = (C = ((C += (V += f * d) >>> 13) << 2) + C | 0) + (U &= 8191) | 0), s = j += C >>>= 13, o = D &= 8191, a = L &= 8191, c = M &= 8191, u = k &= 8191, h = q &= 8191, l = z &= 8191, p = H &= 8191, f = V &= 8191, t += 16, r -= 16
                    }
                    this._h[0] = i, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = h, this._h[7] = l, this._h[8] = p, this._h[9] = f
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, n, i, s, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
                    for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
                    for (n = ~n, s = 0; s < 10; s++) this._h[s] = this._h[s] & n | o[s];
                    for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), i = this._h[0] + this._pad[0], this._h[0] = 65535 & i, s = 1; s < 8; s++) i = (this._h[s] + this._pad[s] | 0) + (i >>> 16) | 0, this._h[s] = 65535 & i;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        n = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > n && (t = n);
                        for (var i = 0; i < t; i++) this._buffer[this._leftover + i] = e[r + i];
                        if (n -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (n >= 16 && (t = n - n % 16, this._blocks(e, r, t), r += t, n -= t), n) {
                        for (i = 0; i < n; i++) this._buffer[this._leftover + i] = e[r + i];
                        this._leftover += n
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw new Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return i.wipe(this._buffer), i.wipe(this._r), i.wipe(this._h), i.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
                var r = new s(e);
                r.update(t);
                var n = r.digest();
                return r.clean(), n
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && n.equal(e, r)
            }
        },
        4993: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            const n = r(5599),
                i = r(1057),
                s = r(4377);

            function o(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.defaultRandomSource).randomBytes(e)
            }
            t.defaultRandomSource = new n.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function() {
                const e = o(4, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.defaultRandomSource),
                    r = (0, i.readUint32LE)(e);
                return (0, s.wipe)(e), r
            };
            const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.defaultRandomSource;
                if (r.length < 2) throw new Error("randomString charset is too short");
                if (r.length > 256) throw new Error("randomString charset is too long");
                let i = "";
                const c = r.length,
                    u = 256 - 256 % c;
                for (; e > 0;) {
                    const t = o(Math.ceil(256 * e / u), n);
                    for (let n = 0; n < t.length && e > 0; n++) {
                        const s = t[n];
                        s < u && (i += r.charAt(s % c), e--)
                    }(0, s.wipe)(t)
                }
                return i
            }
            t.randomString = c, t.randomStringForEntropy = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.defaultRandomSource;
                return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, n)
            }
        },
        8552: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            t.BrowserRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    const e = "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
                    const t = new Uint8Array(e);
                    for (let r = 0; r < t.length; r += 65536) this._crypto.getRandomValues(t.subarray(r, r + Math.min(t.length - r, 65536)));
                    return t
                }
            }
        },
        6426: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            const n = r(4377);
            t.NodeRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        const e = r(9432);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
                    const r = new Uint8Array(e);
                    for (let n = 0; n < r.length; n++) r[n] = t[n];
                    return (0, n.wipe)(t), r
                }
            }
        },
        5599: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            const n = r(8552),
                i = r(6426);
            t.SystemRandomSource = class {
                constructor() {
                    return this.isAvailable = !1, this.name = "", this._source = new n.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Browser")) : (this._source = new i.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Node")) : void 0)
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw new Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
        },
        137: (e, t, r) => {
            "use strict";
            var n = r(1057),
                i = r(4377);
            t.On = 32, t.cS = 64;
            var s = function() {
                function e() {
                    this.digestLength = t.On, this.blockSize = t.cS, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            i = t / 536870912 | 0,
                            s = t << 3,
                            o = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        n.writeUint32BE(i, this._buffer, o - 8), n.writeUint32BE(s, this._buffer, o - 4), a(this._temp, this._state, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 4; c++) n.writeUint32BE(this._state[c], e, 4 * c);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    i.wipe(e.state), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.aD = s;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, i, s) {
                for (; s >= 64;) {
                    for (var a = t[0], c = t[1], u = t[2], h = t[3], l = t[4], p = t[5], f = t[6], d = t[7], g = 0; g < 16; g++) {
                        var y = i + 4 * g;
                        e[g] = n.readUint32BE(r, y)
                    }
                    for (g = 16; g < 64; g++) {
                        var v = e[g - 2],
                            m = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            w = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[g] = (m + e[g - 7] | 0) + (w + e[g - 16] | 0)
                    }
                    for (g = 0; g < 64; g++) {
                        m = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & p ^ ~l & f) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0, w = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                        d = f, f = p, p = l, l = h + m | 0, h = u, u = c, c = a, a = m + w | 0
                    }
                    t[0] += a, t[1] += c, t[2] += u, t[3] += h, t[4] += l, t[5] += p, t[6] += f, t[7] += d, i += 64, s -= 64
                }
                return i
            }
            t.tW = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        7787: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(1057),
                i = r(4377);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var n = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, n, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            i = t / 536870912 | 0,
                            s = t << 3,
                            o = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        n.writeUint32BE(i, this._buffer, o - 8), n.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) n.writeUint32BE(this._stateHi[c], e, 8 * c), n.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    i.wipe(e.stateHi), i.wipe(e.stateLo), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, i, s, a, c) {
                for (var u, h, l, p, f, d, g, y, v = r[0], m = r[1], w = r[2], b = r[3], _ = r[4], E = r[5], I = r[6], S = r[7], O = i[0], P = i[1], N = i[2], A = i[3], R = i[4], T = i[5], x = i[6], C = i[7]; c >= 128;) {
                    for (var U = 0; U < 16; U++) {
                        var j = 8 * U + a;
                        e[U] = n.readUint32BE(s, j), t[U] = n.readUint32BE(s, j + 4)
                    }
                    for (U = 0; U < 80; U++) {
                        var D, L, M = v,
                            k = m,
                            q = w,
                            z = b,
                            H = _,
                            V = E,
                            B = I,
                            F = O,
                            K = P,
                            W = N,
                            J = A,
                            G = R,
                            Y = T,
                            Q = x;
                        if (f = 65535 & (h = C), d = h >>> 16, g = 65535 & (u = S), y = u >>> 16, f += 65535 & (h = (R >>> 14 | _ << 18) ^ (R >>> 18 | _ << 14) ^ (_ >>> 9 | R << 23)), d += h >>> 16, g += 65535 & (u = (_ >>> 14 | R << 18) ^ (_ >>> 18 | R << 14) ^ (R >>> 9 | _ << 23)), y += u >>> 16, f += 65535 & (h = R & T ^ ~R & x), d += h >>> 16, g += 65535 & (u = _ & E ^ ~_ & I), y += u >>> 16, u = o[2 * U], f += 65535 & (h = o[2 * U + 1]), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = e[U % 16], d += (h = t[U % 16]) >>> 16, g += 65535 & u, y += u >>> 16, g += (d += (f += 65535 & h) >>> 16) >>> 16, f = 65535 & (h = p = 65535 & f | d << 16), d = h >>> 16, g = 65535 & (u = l = 65535 & g | (y += g >>> 16) << 16), y = u >>> 16, f += 65535 & (h = (O >>> 28 | v << 4) ^ (v >>> 2 | O << 30) ^ (v >>> 7 | O << 25)), d += h >>> 16, g += 65535 & (u = (v >>> 28 | O << 4) ^ (O >>> 2 | v << 30) ^ (O >>> 7 | v << 25)), y += u >>> 16, d += (h = O & P ^ O & N ^ P & N) >>> 16, g += 65535 & (u = v & m ^ v & w ^ m & w), y += u >>> 16, D = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (y += g >>> 16) << 16, L = 65535 & f | d << 16, f = 65535 & (h = J), d = h >>> 16, g = 65535 & (u = z), y = u >>> 16, d += (h = p) >>> 16, g += 65535 & (u = l), y += u >>> 16, m = M, w = k, b = q, _ = z = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (y += g >>> 16) << 16, E = H, I = V, S = B, v = D, P = F, N = K, A = W, R = J = 65535 & f | d << 16, T = G, x = Y, C = Q, O = L, U % 16 === 15)
                            for (j = 0; j < 16; j++) u = e[j], f = 65535 & (h = t[j]), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = e[(j + 9) % 16], f += 65535 & (h = t[(j + 9) % 16]), d += h >>> 16, g += 65535 & u, y += u >>> 16, l = e[(j + 1) % 16], f += 65535 & (h = ((p = t[(j + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), d += h >>> 16, g += 65535 & (u = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7), y += u >>> 16, l = e[(j + 14) % 16], d += (h = ((p = t[(j + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16, g += 65535 & (u = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6), y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, e[j] = 65535 & g | y << 16, t[j] = 65535 & f | d << 16
                    }
                    f = 65535 & (h = O), d = h >>> 16, g = 65535 & (u = v), y = u >>> 16, u = r[0], d += (h = i[0]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[0] = v = 65535 & g | y << 16, i[0] = O = 65535 & f | d << 16, f = 65535 & (h = P), d = h >>> 16, g = 65535 & (u = m), y = u >>> 16, u = r[1], d += (h = i[1]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[1] = m = 65535 & g | y << 16, i[1] = P = 65535 & f | d << 16, f = 65535 & (h = N), d = h >>> 16, g = 65535 & (u = w), y = u >>> 16, u = r[2], d += (h = i[2]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[2] = w = 65535 & g | y << 16, i[2] = N = 65535 & f | d << 16, f = 65535 & (h = A), d = h >>> 16, g = 65535 & (u = b), y = u >>> 16, u = r[3], d += (h = i[3]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[3] = b = 65535 & g | y << 16, i[3] = A = 65535 & f | d << 16, f = 65535 & (h = R), d = h >>> 16, g = 65535 & (u = _), y = u >>> 16, u = r[4], d += (h = i[4]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[4] = _ = 65535 & g | y << 16, i[4] = R = 65535 & f | d << 16, f = 65535 & (h = T), d = h >>> 16, g = 65535 & (u = E), y = u >>> 16, u = r[5], d += (h = i[5]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[5] = E = 65535 & g | y << 16, i[5] = T = 65535 & f | d << 16, f = 65535 & (h = x), d = h >>> 16, g = 65535 & (u = I), y = u >>> 16, u = r[6], d += (h = i[6]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[6] = I = 65535 & g | y << 16, i[6] = x = 65535 & f | d << 16, f = 65535 & (h = C), d = h >>> 16, g = 65535 & (u = S), y = u >>> 16, u = r[7], d += (h = i[7]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[7] = S = 65535 & g | y << 16, i[7] = C = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        4377: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        2415: (e, t, r) => {
            "use strict";
            t.Tc = t.TZ = t.wE = t.Xx = void 0;
            const n = r(4993),
                i = r(4377);

            function s(e) {
                const t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.Xx = 32, t.wE = 32;
            const o = new Uint8Array(32);
            o[0] = 9;
            const a = s([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let n = e[r] + t + 65535;
                    t = Math.floor(n / 65536), e[r] = n - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function u(e, t, r) {
                const n = ~(r - 1);
                for (let i = 0; i < 16; i++) {
                    const r = n & (e[i] ^ t[i]);
                    e[i] ^= r, t[i] ^= r
                }
            }

            function h(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function l(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function p(e, t, r) {
                let n, i, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    b = 0,
                    _ = 0,
                    E = 0,
                    I = 0,
                    S = 0,
                    O = 0,
                    P = 0,
                    N = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    x = 0,
                    C = 0,
                    U = 0,
                    j = 0,
                    D = 0,
                    L = r[0],
                    M = r[1],
                    k = r[2],
                    q = r[3],
                    z = r[4],
                    H = r[5],
                    V = r[6],
                    B = r[7],
                    F = r[8],
                    K = r[9],
                    W = r[10],
                    J = r[11],
                    G = r[12],
                    Y = r[13],
                    Q = r[14],
                    $ = r[15];
                n = t[0], s += n * L, o += n * M, a += n * k, c += n * q, u += n * z, h += n * H, l += n * V, p += n * B, f += n * F, d += n * K, g += n * W, y += n * J, v += n * G, m += n * Y, w += n * Q, b += n * $, n = t[1], o += n * L, a += n * M, c += n * k, u += n * q, h += n * z, l += n * H, p += n * V, f += n * B, d += n * F, g += n * K, y += n * W, v += n * J, m += n * G, w += n * Y, b += n * Q, _ += n * $, n = t[2], a += n * L, c += n * M, u += n * k, h += n * q, l += n * z, p += n * H, f += n * V, d += n * B, g += n * F, y += n * K, v += n * W, m += n * J, w += n * G, b += n * Y, _ += n * Q, E += n * $, n = t[3], c += n * L, u += n * M, h += n * k, l += n * q, p += n * z, f += n * H, d += n * V, g += n * B, y += n * F, v += n * K, m += n * W, w += n * J, b += n * G, _ += n * Y, E += n * Q, I += n * $, n = t[4], u += n * L, h += n * M, l += n * k, p += n * q, f += n * z, d += n * H, g += n * V, y += n * B, v += n * F, m += n * K, w += n * W, b += n * J, _ += n * G, E += n * Y, I += n * Q, S += n * $, n = t[5], h += n * L, l += n * M, p += n * k, f += n * q, d += n * z, g += n * H, y += n * V, v += n * B, m += n * F, w += n * K, b += n * W, _ += n * J, E += n * G, I += n * Y, S += n * Q, O += n * $, n = t[6], l += n * L, p += n * M, f += n * k, d += n * q, g += n * z, y += n * H, v += n * V, m += n * B, w += n * F, b += n * K, _ += n * W, E += n * J, I += n * G, S += n * Y, O += n * Q, P += n * $, n = t[7], p += n * L, f += n * M, d += n * k, g += n * q, y += n * z, v += n * H, m += n * V, w += n * B, b += n * F, _ += n * K, E += n * W, I += n * J, S += n * G, O += n * Y, P += n * Q, N += n * $, n = t[8], f += n * L, d += n * M, g += n * k, y += n * q, v += n * z, m += n * H, w += n * V, b += n * B, _ += n * F, E += n * K, I += n * W, S += n * J, O += n * G, P += n * Y, N += n * Q, A += n * $, n = t[9], d += n * L, g += n * M, y += n * k, v += n * q, m += n * z, w += n * H, b += n * V, _ += n * B, E += n * F, I += n * K, S += n * W, O += n * J, P += n * G, N += n * Y, A += n * Q, R += n * $, n = t[10], g += n * L, y += n * M, v += n * k, m += n * q, w += n * z, b += n * H, _ += n * V, E += n * B, I += n * F, S += n * K, O += n * W, P += n * J, N += n * G, A += n * Y, R += n * Q, T += n * $, n = t[11], y += n * L, v += n * M, m += n * k, w += n * q, b += n * z, _ += n * H, E += n * V, I += n * B, S += n * F, O += n * K, P += n * W, N += n * J, A += n * G, R += n * Y, T += n * Q, x += n * $, n = t[12], v += n * L, m += n * M, w += n * k, b += n * q, _ += n * z, E += n * H, I += n * V, S += n * B, O += n * F, P += n * K, N += n * W, A += n * J, R += n * G, T += n * Y, x += n * Q, C += n * $, n = t[13], m += n * L, w += n * M, b += n * k, _ += n * q, E += n * z, I += n * H, S += n * V, O += n * B, P += n * F, N += n * K, A += n * W, R += n * J, T += n * G, x += n * Y, C += n * Q, U += n * $, n = t[14], w += n * L, b += n * M, _ += n * k, E += n * q, I += n * z, S += n * H, O += n * V, P += n * B, N += n * F, A += n * K, R += n * W, T += n * J, x += n * G, C += n * Y, U += n * Q, j += n * $, n = t[15], b += n * L, _ += n * M, E += n * k, I += n * q, S += n * z, O += n * H, P += n * V, N += n * B, A += n * F, R += n * K, T += n * W, x += n * J, C += n * G, U += n * Y, j += n * Q, D += n * $, s += 38 * _, o += 38 * E, a += 38 * I, c += 38 * S, u += 38 * O, h += 38 * P, l += 38 * N, p += 38 * A, f += 38 * R, d += 38 * T, g += 38 * x, y += 38 * C, v += 38 * U, m += 38 * j, w += 38 * D, i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = h, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = w, e[15] = b
            }

            function f(e, t) {
                p(e, t, t)
            }

            function d(e, t) {
                const r = new Uint8Array(32),
                    n = new Float64Array(80),
                    i = s(),
                    o = s(),
                    d = s(),
                    g = s(),
                    y = s(),
                    v = s();
                for (let s = 0; s < 31; s++) r[s] = e[s];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(n, t);
                for (let s = 0; s < 16; s++) o[s] = n[s];
                i[0] = g[0] = 1;
                for (let s = 254; s >= 0; --s) {
                    const e = r[s >>> 3] >>> (7 & s) & 1;
                    u(i, o, e), u(d, g, e), h(y, i, d), l(i, i, d), h(d, o, g), l(o, o, g), f(g, y), f(v, i), p(i, d, i), p(d, o, y), h(y, i, d), l(i, i, d), f(o, i), l(d, g, v), p(i, d, a), h(i, i, g), p(d, d, i), p(i, g, v), p(g, o, n), f(o, y), u(i, o, e), u(d, g, e)
                }
                for (let s = 0; s < 16; s++) n[s + 16] = i[s], n[s + 32] = d[s], n[s + 48] = o[s], n[s + 64] = g[s];
                const m = n.subarray(32),
                    w = n.subarray(16);
                ! function(e, t) {
                    const r = s();
                    for (let n = 0; n < 16; n++) r[n] = t[n];
                    for (let n = 253; n >= 0; n--) f(r, r), 2 !== n && 4 !== n && p(r, r, t);
                    for (let n = 0; n < 16; n++) e[n] = r[n]
                }(m, m), p(w, w, m);
                const b = new Uint8Array(32);
                return function(e, t) {
                    const r = s(),
                        n = s();
                    for (let i = 0; i < 16; i++) n[i] = t[i];
                    c(n), c(n), c(n);
                    for (let i = 0; i < 2; i++) {
                        r[0] = n[0] - 65517;
                        for (let t = 1; t < 15; t++) r[t] = n[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
                        r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                        const e = r[15] >> 16 & 1;
                        r[14] &= 65535, u(n, r, 1 - e)
                    }
                    for (let i = 0; i < 16; i++) e[2 * i] = 255 & n[i], e[2 * i + 1] = n[i] >> 8
                }(b, w), b
            }

            function g(e) {
                return d(e, o)
            }

            function y(e) {
                if (e.length !== t.wE) throw new Error("x25519: seed must be ".concat(t.wE, " bytes"));
                const r = new Uint8Array(e);
                return {
                    publicKey: g(r),
                    secretKey: r
                }
            }
            t.TZ = function(e) {
                const t = (0, n.randomBytes)(32, e),
                    r = y(t);
                return (0, i.wipe)(t), r
            }, t.Tc = function(e, r) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e.length !== t.Xx) throw new Error("X25519: incorrect secret key length");
                if (r.length !== t.Xx) throw new Error("X25519: incorrect public key length");
                const i = d(e, r);
                if (n) {
                    let e = 0;
                    for (let t = 0; t < i.length; t++) e |= i[t];
                    if (0 === e) throw new Error("X25519: invalid shared key")
                }
                return i
            }
        },
        2010: (e, t, r) => {
            "use strict";
            r.d(t, {
                EthereumProvider: () => vu
            });
            var n = {};
            r.r(n), r.d(n, {
                identity: () => k
            });
            var i = {};
            r.r(i), r.d(i, {
                base2: () => q
            });
            var s = {};
            r.r(s), r.d(s, {
                base8: () => z
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: () => H
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: () => V,
                base16upper: () => B
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: () => F,
                base32hex: () => G,
                base32hexpad: () => Q,
                base32hexpadupper: () => $,
                base32hexupper: () => Y,
                base32pad: () => W,
                base32padupper: () => J,
                base32upper: () => K,
                base32z: () => X
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: () => Z,
                base36upper: () => ee
            });
            var h = {};
            r.r(h), r.d(h, {
                base58btc: () => te,
                base58flickr: () => re
            });
            var l = {};
            r.r(l), r.d(l, {
                base64: () => ne,
                base64pad: () => ie,
                base64url: () => se,
                base64urlpad: () => oe
            });
            var p = {};
            r.r(p), r.d(p, {
                base256emoji: () => he
            });
            var f = {};
            r.r(f), r.d(f, {
                sha256: () => De,
                sha512: () => Le
            });
            var d = {};
            r.r(d), r.d(d, {
                identity: () => ke
            });
            var g = {};
            r.r(g), r.d(g, {
                code: () => ze,
                decode: () => Ve,
                encode: () => He,
                name: () => qe
            });
            var y = {};
            r.r(y), r.d(y, {
                code: () => We,
                decode: () => Ge,
                encode: () => Je,
                name: () => Ke
            });
            var v = r(6020),
                m = r.n(v),
                w = r(4969),
                b = r(3869),
                _ = r(4993),
                E = r(137),
                I = r(2415);

            function S(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function O() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? S(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }

            function P(e, t) {
                t || (t = e.reduce(((e, t) => e + t.length), 0));
                const r = O(t);
                let n = 0;
                for (const i of e) r.set(i, n), n += i.length;
                return S(r)
            }
            var N = function(e, t) {
                if (e.length >= 255) throw new TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                for (var i = 0; i < e.length; i++) {
                    var s = e.charAt(i),
                        o = s.charCodeAt(0);
                    if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                    r[o] = i
                }
                var a = e.length,
                    c = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    h = Math.log(256) / Math.log(a);

                function l(e) {
                    if ("string" !== typeof e) throw new TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[t]) {
                        for (var n = 0, i = 0; e[t] === c;) n++, t++;
                        for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                            var h = r[e.charCodeAt(t)];
                            if (255 === h) return;
                            for (var l = 0, p = s - 1;
                                (0 !== h || l < i) && -1 !== p; p--, l++) h += a * o[p] >>> 0, o[p] = h % 256 >>> 0, h = h / 256 >>> 0;
                            if (0 !== h) throw new Error("Non-zero carry");
                            i = l, t++
                        }
                        if (" " !== e[t]) {
                            for (var f = s - i; f !== s && 0 === o[f];) f++;
                            for (var d = new Uint8Array(n + (s - f)), g = n; f !== s;) d[g++] = o[f++];
                            return d
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                        for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                            for (var l = t[i], p = 0, f = o - 1;
                                (0 !== l || p < n) && -1 !== f; f--, p++) l += 256 * u[f] >>> 0, u[f] = l % a >>> 0, l = l / a >>> 0;
                            if (0 !== l) throw new Error("Non-zero carry");
                            n = p, i++
                        }
                        for (var d = o - n; d !== o && 0 === u[d];) d++;
                        for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                        return g
                    },
                    decodeUnsafe: l,
                    decode: function(e) {
                        var r = l(e);
                        if (r) return r;
                        throw new Error("Non-".concat(t, " character"))
                    }
                }
            };
            const A = N,
                R = (new Uint8Array(0), e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw new Error("Unknown type, must be binary type")
                });
            class T {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
                    throw Error("Unknown type, must be binary type")
                }
            }
            class x {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" === typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return U(this, e)
                }
            }
            class C {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return U(this, e)
                }
                decode(e) {
                    const t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                }
            }
            const U = (e, t) => new C({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class j {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new T(e, t, r), this.decoder = new x(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const D = e => {
                    let {
                        name: t,
                        prefix: r,
                        encode: n,
                        decode: i
                    } = e;
                    return new j(t, r, n, i)
                },
                L = e => {
                    let {
                        prefix: t,
                        name: r,
                        alphabet: n
                    } = e;
                    const {
                        encode: i,
                        decode: s
                    } = A(n, r);
                    return D({
                        prefix: t,
                        name: r,
                        encode: i,
                        decode: e => R(s(e))
                    })
                },
                M = e => {
                    let {
                        name: t,
                        prefix: r,
                        bitsPerChar: n,
                        alphabet: i
                    } = e;
                    return D({
                        prefix: r,
                        name: t,
                        encode: e => ((e, t, r) => {
                            const n = "=" === t[t.length - 1],
                                i = (1 << r) - 1;
                            let s = "",
                                o = 0,
                                a = 0;
                            for (let c = 0; c < e.length; ++c)
                                for (a = a << 8 | e[c], o += 8; o > r;) o -= r, s += t[i & a >> o];
                            if (o && (s += t[i & a << r - o]), n)
                                for (; s.length * r & 7;) s += "=";
                            return s
                        })(e, i, n),
                        decode: e => ((e, t, r, n) => {
                            const i = {};
                            for (let h = 0; h < t.length; ++h) i[t[h]] = h;
                            let s = e.length;
                            for (;
                                "=" === e[s - 1];) --s;
                            const o = new Uint8Array(s * r / 8 | 0);
                            let a = 0,
                                c = 0,
                                u = 0;
                            for (let h = 0; h < s; ++h) {
                                const t = i[e[h]];
                                if (void 0 === t) throw new SyntaxError("Non-".concat(n, " character"));
                                c = c << r | t, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                            }
                            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                            return o
                        })(e, i, n, t)
                    })
                },
                k = D({
                    prefix: "\0",
                    name: "identity",
                    encode: e => (e => (new TextDecoder).decode(e))(e),
                    decode: e => (e => (new TextEncoder).encode(e))(e)
                }),
                q = M({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                z = M({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                H = L({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                V = M({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                B = M({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                F = M({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                K = M({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                W = M({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                J = M({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                G = M({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Y = M({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Q = M({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                $ = M({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                X = M({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                Z = L({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                ee = L({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                te = L({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                re = L({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                ne = M({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ie = M({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                se = M({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                oe = M({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                ae = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                ce = ae.reduce(((e, t, r) => (e[r] = t, e)), []),
                ue = ae.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
            const he = D({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(e) {
                    return e.reduce(((e, t) => e += ce[t]), "")
                },
                decode: function(e) {
                    const t = [];
                    for (const r of e) {
                        const e = ue[r.codePointAt(0)];
                        if (void 0 === e) throw new Error("Non-base256emoji character: ".concat(r));
                        t.push(e)
                    }
                    return new Uint8Array(t)
                }
            });
            var le = function e(t, r, n) {
                    r = r || [];
                    var i = n = n || 0;
                    for (; t >= de;) r[n++] = 255 & t | pe, t /= 128;
                    for (; t & fe;) r[n++] = 255 & t | pe, t >>>= 7;
                    return r[n] = 0 | t, e.bytes = n - i + 1, r
                },
                pe = 128,
                fe = -128,
                de = Math.pow(2, 31);
            var ge = function e(t, r) {
                    var n, i = 0,
                        s = 0,
                        o = r = r || 0,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
                        n = t[o++], i += s < 28 ? (n & ve) << s : (n & ve) * Math.pow(2, s), s += 7
                    } while (n >= ye);
                    return e.bytes = o - r, i
                },
                ye = 128,
                ve = 127;
            var me = Math.pow(2, 7),
                we = Math.pow(2, 14),
                be = Math.pow(2, 21),
                _e = Math.pow(2, 28),
                Ee = Math.pow(2, 35),
                Ie = Math.pow(2, 42),
                Se = Math.pow(2, 49),
                Oe = Math.pow(2, 56),
                Pe = Math.pow(2, 63);
            const Ne = {
                    encode: le,
                    decode: ge,
                    encodingLength: function(e) {
                        return e < me ? 1 : e < we ? 2 : e < be ? 3 : e < _e ? 4 : e < Ee ? 5 : e < Ie ? 6 : e < Se ? 7 : e < Oe ? 8 : e < Pe ? 9 : 10
                    }
                },
                Ae = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return Ne.encode(e, t, r), t
                },
                Re = e => Ne.encodingLength(e),
                Te = (e, t) => {
                    const r = t.byteLength,
                        n = Re(e),
                        i = n + Re(r),
                        s = new Uint8Array(i + r);
                    return Ae(e, s, 0), Ae(r, s, n), s.set(t, i), new xe(e, r, t, s)
                };
            class xe {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            const Ce = e => {
                let {
                    name: t,
                    code: r,
                    encode: n
                } = e;
                return new Ue(t, r, n)
            };
            class Ue {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Te(this.code, t) : t.then((e => Te(this.code, e)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const je = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                De = Ce({
                    name: "sha2-256",
                    code: 18,
                    encode: je("SHA-256")
                }),
                Le = Ce({
                    name: "sha2-512",
                    code: 19,
                    encode: je("SHA-512")
                }),
                Me = R,
                ke = {
                    code: 0,
                    name: "identity",
                    encode: Me,
                    digest: e => Te(0, Me(e))
                },
                qe = "raw",
                ze = 85,
                He = e => R(e),
                Ve = e => R(e),
                Be = new TextEncoder,
                Fe = new TextDecoder,
                Ke = "json",
                We = 512,
                Je = e => Be.encode(JSON.stringify(e)),
                Ge = e => JSON.parse(Fe.decode(e));
            Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom");
            Symbol.for("@ipld/js-cid/CID");
            const Ye = { ...n,
                ...i,
                ...s,
                ...o,
                ...a,
                ...c,
                ...u,
                ...h,
                ...l,
                ...p
            };

            function Qe(e, t, r, n) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            const $e = Qe("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
                Xe = Qe("ascii", "a", (e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }), (e => {
                    const t = O((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                })),
                Ze = {
                    utf8: $e,
                    "utf-8": $e,
                    hex: Ye.base16,
                    latin1: Xe,
                    ascii: Xe,
                    binary: Xe,
                    ...Ye
                };

            function et(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                const r = Ze[t];
                if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
                return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode("".concat(r.prefix).concat(e)) : S(globalThis.Buffer.from(e, "utf-8"))
            }

            function tt(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                const r = Ze[t];
                if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
                return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(e).substring(1) : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
            }
            var rt = r(3485),
                nt = r(9553);
            r(4437), r(6081), r(7306);
            const it = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            };
            Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            const st = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function ot(e, t) {
                const {
                    message: r,
                    code: n
                } = st[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: n
                }
            }

            function at(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }
            const ct = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                ut = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                ht = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function lt(e, t) {
                if (!("__proto__" === e || "constructor" === e && t && "object" === typeof t && "prototype" in t)) return t;
                ! function(e) {
                    console.warn('[destr] Dropping "'.concat(e, '" key to prevent prototype pollution.'))
                }(e)
            }

            function pt(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" !== typeof e) return e;
                const r = e.trim();
                if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    const e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!ht.test(e)) {
                    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (ct.test(e) || ut.test(e)) {
                        if (t.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, lt)
                    }
                    return JSON.parse(e)
                } catch (n) {
                    if (t.strict) throw n;
                    return e
                }
            }

            function ft(e) {
                try {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    return (i = e(...r)) && "function" === typeof i.then ? i : Promise.resolve(i)
                } catch (s) {
                    return Promise.reject(s)
                }
                var i
            }

            function dt(e) {
                if (function(e) {
                        const t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        const t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" === typeof e.toJSON) return dt(e.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function gt() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const yt = "base64:";

            function vt(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function mt() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return vt(t.join(":"))
            }

            function wt(e) {
                return (e = vt(e)) ? e + ":" : ""
            }
            const bt = () => {
                const e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    getItemRaw(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function _t() {
                const e = {
                        mounts: {
                            "": (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).driver || bt()
                        },
                        mountpoints: [""],
                        watching: !1,
                        watchListeners: [],
                        unwatch: {}
                    },
                    t = t => {
                        for (const r of e.mountpoints)
                            if (t.startsWith(r)) return {
                                base: r,
                                relativeKey: t.slice(r.length),
                                driver: e.mounts[r]
                            };
                        return {
                            base: "",
                            relativeKey: t,
                            driver: e.mounts[""]
                        }
                    },
                    r = (t, r) => e.mountpoints.filter((e => e.startsWith(t) || r && t.startsWith(e))).map((r => ({
                        relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                        mountpoint: r,
                        driver: e.mounts[r]
                    }))),
                    n = (t, r) => {
                        if (e.watching) {
                            r = vt(r);
                            for (const n of e.watchListeners) n(t, r)
                        }
                    },
                    i = async () => {
                        if (e.watching) {
                            for (const t in e.unwatch) await e.unwatch[t]();
                            e.unwatch = {}, e.watching = !1
                        }
                    },
                    s = (e, r, n) => {
                        const i = new Map,
                            s = e => {
                                let t = i.get(e.base);
                                return t || (t = {
                                    driver: e.driver,
                                    base: e.base,
                                    items: []
                                }, i.set(e.base, t)), t
                            };
                        for (const o of e) {
                            const e = "string" === typeof o,
                                n = vt(e ? o : o.key),
                                i = e ? void 0 : o.value,
                                a = e || !o.options ? r : { ...r,
                                    ...o.options
                                },
                                c = t(n);
                            s(c).items.push({
                                key: n,
                                value: i,
                                relativeKey: c.relativeKey,
                                options: a
                            })
                        }
                        return Promise.all([...i.values()].map((e => n(e)))).then((e => e.flat()))
                    },
                    o = {
                        hasItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = vt(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return ft(i.hasItem, n, r)
                        },
                        getItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = vt(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return ft(i.getItem, n, r).then((e => pt(e)))
                        },
                        getItems: (e, t) => s(e, t, (e => e.driver.getItems ? ft(e.driver.getItems, e.items.map((e => ({
                            key: e.relativeKey,
                            options: e.options
                        }))), t).then((t => t.map((t => ({
                            key: mt(e.base, t.key),
                            value: pt(t.value)
                        }))))) : Promise.all(e.items.map((t => ft(e.driver.getItem, t.relativeKey, t.options).then((e => ({
                            key: t.key,
                            value: pt(e)
                        })))))))),
                        getItemRaw(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = vt(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e);
                            return i.getItemRaw ? ft(i.getItemRaw, n, r) : ft(i.getItem, n, r).then((e => function(e) {
                                return "string" !== typeof e ? e : e.startsWith(yt) ? (gt(), Buffer.from(e.slice(yt.length), "base64")) : e
                            }(e)))
                        },
                        async setItem(e, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (void 0 === r) return o.removeItem(e);
                            e = vt(e);
                            const {
                                relativeKey: s,
                                driver: a
                            } = t(e);
                            a.setItem && (await ft(a.setItem, s, dt(r), i), a.watch || n("update", e))
                        },
                        async setItems(e, t) {
                            await s(e, t, (async e => {
                                e.driver.setItems && await ft(e.driver.setItems, e.items.map((e => ({
                                    key: e.relativeKey,
                                    value: dt(e.value),
                                    options: e.options
                                }))), t), e.driver.setItem && await Promise.all(e.items.map((t => ft(e.driver.setItem, t.relativeKey, dt(t.value), t.options))))
                            }))
                        },
                        async setItemRaw(e, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (void 0 === r) return o.removeItem(e, i);
                            e = vt(e);
                            const {
                                relativeKey: s,
                                driver: a
                            } = t(e);
                            if (a.setItemRaw) await ft(a.setItemRaw, s, r, i);
                            else {
                                if (!a.setItem) return;
                                await ft(a.setItem, s, function(e) {
                                    if ("string" === typeof e) return e;
                                    gt();
                                    const t = Buffer.from(e).toString("base64");
                                    return yt + t
                                }(r), i)
                            }
                            a.watch || n("update", e)
                        },
                        async removeItem(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            "boolean" === typeof r && (r = {
                                removeMeta: r
                            }), e = vt(e);
                            const {
                                relativeKey: i,
                                driver: s
                            } = t(e);
                            s.removeItem && (await ft(s.removeItem, i, r), (r.removeMeta || r.removeMata) && await ft(s.removeItem, i + "$", r), s.watch || n("remove", e))
                        },
                        async getMeta(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            "boolean" === typeof r && (r = {
                                nativeOnly: r
                            }), e = vt(e);
                            const {
                                relativeKey: n,
                                driver: i
                            } = t(e), s = Object.create(null);
                            if (i.getMeta && Object.assign(s, await ft(i.getMeta, n, r)), !r.nativeOnly) {
                                const e = await ft(i.getItem, n + "$", r).then((e => pt(e)));
                                e && "object" === typeof e && ("string" === typeof e.atime && (e.atime = new Date(e.atime)), "string" === typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                            }
                            return s
                        },
                        setMeta(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.setItem(e + "$", t, r)
                        },
                        removeMeta(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.removeItem(e + "$", t)
                        },
                        async getKeys(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = wt(e);
                            const n = r(e, !0);
                            let i = [];
                            const s = [];
                            for (const r of n) {
                                const e = (await ft(r.driver.getKeys, r.relativeBase, t)).map((e => r.mountpoint + vt(e))).filter((e => !i.some((t => e.startsWith(t)))));
                                s.push(...e), i = [r.mountpoint, ...i.filter((e => !e.startsWith(r.mountpoint)))]
                            }
                            return e ? s.filter((t => t.startsWith(e) && !t.endsWith("$"))) : s.filter((e => !e.endsWith("$")))
                        },
                        async clear(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = wt(e), await Promise.all(r(e, !1).map((async e => {
                                if (e.driver.clear) return ft(e.driver.clear, e.relativeBase, t);
                                if (e.driver.removeItem) {
                                    const r = await e.driver.getKeys(e.relativeBase || "", t);
                                    return Promise.all(r.map((r => e.driver.removeItem(r, t))))
                                }
                            })))
                        },
                        async dispose() {
                            await Promise.all(Object.values(e.mounts).map((e => It(e))))
                        },
                        watch: async t => (await (async () => {
                            if (!e.watching) {
                                e.watching = !0;
                                for (const t in e.mounts) e.unwatch[t] = await Et(e.mounts[t], n, t)
                            }
                        })(), e.watchListeners.push(t), async () => {
                            e.watchListeners = e.watchListeners.filter((e => e !== t)), 0 === e.watchListeners.length && await i()
                        }),
                        async unwatch() {
                            e.watchListeners = [], await i()
                        },
                        mount(t, r) {
                            if ((t = wt(t)) && e.mounts[t]) throw new Error("already mounted at ".concat(t));
                            return t && (e.mountpoints.push(t), e.mountpoints.sort(((e, t) => t.length - e.length))), e.mounts[t] = r, e.watching && Promise.resolve(Et(r, n, t)).then((r => {
                                e.unwatch[t] = r
                            })).catch(console.error), o
                        },
                        async unmount(t) {
                            let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            (t = wt(t)) && e.mounts[t] && (e.watching && t in e.unwatch && (e.unwatch[t](), delete e.unwatch[t]), r && await It(e.mounts[t]), e.mountpoints = e.mountpoints.filter((e => e !== t)), delete e.mounts[t])
                        },
                        getMount() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            e = vt(e) + ":";
                            const r = t(e);
                            return {
                                driver: r.driver,
                                base: r.base
                            }
                        },
                        getMounts() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = vt(e);
                            return r(e, t.parents).map((e => ({
                                driver: e.driver,
                                base: e.mountpoint
                            })))
                        }
                    };
                return o
            }

            function Et(e, t, r) {
                return e.watch ? e.watch(((e, n) => t(e, r + n))) : () => {}
            }
            async function It(e) {
                "function" === typeof e.dispose && await ft(e.dispose)
            }

            function St(e) {
                return new Promise(((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                }))
            }

            function Ot(e, t) {
                const r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                const n = St(r);
                return (e, r) => n.then((n => r(n.transaction(t, e).objectStore(t))))
            }
            let Pt;

            function Nt() {
                return Pt || (Pt = Ot("keyval-store", "keyval")), Pt
            }

            function At(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nt())("readonly", (t => St(t.get(e))))
            }

            function Rt(e, t) {
                return e.openCursor().onsuccess = function() {
                    this.result && (t(this.result), this.result.continue())
                }, St(e.transaction)
            }
            const Tt = e => JSON.stringify(e, ((e, t) => "bigint" === typeof t ? t.toString() + "n" : t)),
                xt = e => {
                    const t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, ((e, t) => "string" === typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t))
                };

            function Ct(e) {
                if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type ".concat(typeof e));
                try {
                    return xt(e)
                } catch (t) {
                    return e
                }
            }

            function Ut(e) {
                return "string" === typeof e ? e : Tt(e) || ""
            }
            var jt = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = e.base && e.base.length > 0 ? "".concat(e.base, ":") : "",
                    r = e => t + e;
                let n;
                return e.dbName && e.storeName && (n = Ot(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await At(r(e), n) > "u"),
                    async getItem(e) {
                        var t;
                        return null !== (t = await At(r(e), n)) && void 0 !== t ? t : null
                    },
                    setItem: (e, t) => function(e, t) {
                        return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nt())("readwrite", (r => (r.put(t, e), St(r.transaction))))
                    }(r(e), t, n),
                    removeItem: e => function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nt())("readwrite", (t => (t.delete(e), St(t.transaction))))
                    }(r(e), n),
                    getKeys: () => function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt())("readonly", (e => {
                            if (e.getAllKeys) return St(e.getAllKeys());
                            const t = [];
                            return Rt(e, (e => t.push(e.key))).then((() => t))
                        }))
                    }(n),
                    clear: () => function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt())("readwrite", (e => (e.clear(), St(e.transaction))))
                    }(n)
                }
            };
            class Dt {
                constructor() {
                    this.indexedDb = _t({
                        driver: jt({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e => [e.key, e.value]))
                }
                async getItem(e) {
                    const t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, Ut(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                Mt = {
                    exports: {}
                };

            function kt(e) {
                var t;
                return [e[0], Ct(null != (t = e[1]) ? t : "")]
            }! function() {
                let e;

                function t() {}
                e = t, e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    const e = this;
                    Object.keys(e).forEach((function(t) {
                        e[t] = void 0, delete e[t]
                    }))
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), typeof Lt < "u" && Lt.localStorage ? Mt.exports = Lt.localStorage : typeof window < "u" && window.localStorage ? Mt.exports = window.localStorage : Mt.exports = new t
            }();
            class qt {
                constructor() {
                    this.localStorage = Mt.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(kt)
                }
                async getItem(e) {
                    const t = this.localStorage.getItem(e);
                    if (null !== t) return Ct(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, Ut(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            const zt = async (e, t) => {
                t.length && t.forEach((async t => {
                    await e.removeItem(t)
                }))
            };
            class Ht {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    const e = new qt;
                    this.storage = e;
                    try {
                        (async (e, t, r) => {
                            const n = "wc_storage_version",
                                i = await t.getItem(n);
                            if (i && i >= 1) return void r(t);
                            const s = await e.getKeys();
                            if (!s.length) return void r(t);
                            const o = [];
                            for (; s.length;) {
                                const r = s.shift();
                                if (!r) continue;
                                const n = r.toLowerCase();
                                if (n.includes("wc@") || n.includes("walletconnect") || n.includes("wc_") || n.includes("wallet_connect")) {
                                    const n = await e.getItem(r);
                                    await t.setItem(r, n), o.push(r)
                                }
                            }
                            await t.setItem(n, 1), r(t), zt(e, o)
                        })(e, new Dt, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise((e => {
                        const t = setInterval((() => {
                            this.initialized && (clearInterval(t), e())
                        }), 20)
                    }))
                }
            }
            var Vt = r(7406),
                Bt = r(7566),
                Ft = r(8767);
            class Kt extends Ft.H {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class Wt extends Ft.H {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class Jt {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class Gt extends Ft.H {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Yt extends Ft.H {
                constructor(e) {
                    super()
                }
            }
            class Qt {
                constructor(e, t, r, n) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class $t extends Ft.H {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Xt extends Ft.H {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class Zt {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class er {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            m();
            class tr {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            v.EventEmitter;
            class rr {
                constructor(e) {
                    this.client = e
                }
            }
            var nr = r(3829);
            const ir = ".",
                sr = "base64url",
                or = "utf8",
                ar = "utf8",
                cr = ":",
                ur = "did",
                hr = "key",
                lr = "base58btc",
                pr = "z",
                fr = "K36";

            function dr(e) {
                return tt(et(Ut(e), or), sr)
            }

            function gr(e) {
                const t = et(fr, lr),
                    r = pr + tt(P([t, e]), lr);
                return [ur, hr, r].join(cr)
            }

            function yr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, _.randomBytes)(32);
                return nr.K(e)
            }
            async function vr(e, t, r, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, rt.fromMiliseconds)(Date.now());
                const s = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: gr(n.publicKey),
                        sub: e,
                        aud: t,
                        iat: i,
                        exp: i + r
                    },
                    a = et([dr((c = {
                        header: s,
                        payload: o
                    }).header), dr(c.payload)].join(ir), ar);
                var c;
                return function(e) {
                    return [dr(e.header), dr(e.payload), (t = e.signature, tt(t, sr))].join(ir);
                    var t
                }({
                    header: s,
                    payload: o,
                    signature: nr._S(n.secretKey, a)
                })
            }
            r(5860);
            var mr = function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var n, i = 0, s = t.length; i < s; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                    return e.concat(n || Array.prototype.slice.call(t))
                },
                wr = function(e, t, r) {
                    this.name = e, this.version = t, this.os = r, this.type = "browser"
                },
                br = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = process.platform
                },
                _r = function(e, t, r, n) {
                    this.name = e, this.version = t, this.os = r, this.bot = n, this.type = "bot-device"
                },
                Er = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                Ir = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                Sr = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                Or = 3,
                Pr = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                Nr = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function Ar(e) {
                return e ? Tr(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new Ir : "undefined" !== typeof navigator ? Tr(navigator.userAgent) : "undefined" !== typeof process && process.version ? new br(process.version.slice(1)) : null
            }

            function Rr(e) {
                return "" !== e && Pr.reduce((function(t, r) {
                    var n = r[0],
                        i = r[1];
                    if (t) return t;
                    var s = i.exec(e);
                    return !!s && [n, s]
                }), !1)
            }

            function Tr(e) {
                var t = Rr(e);
                if (!t) return null;
                var r = t[0],
                    n = t[1];
                if ("searchbot" === r) return new Er;
                var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
                i ? i.length < Or && (i = mr(mr([], i, !0), function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push("0");
                    return t
                }(Or - i.length), !0)) : i = [];
                var s = i.join("."),
                    o = function(e) {
                        for (var t = 0, r = Nr.length; t < r; t++) {
                            var n = Nr[t],
                                i = n[0];
                            if (n[1].exec(e)) return i
                        }
                        return null
                    }(e),
                    a = Sr.exec(e);
                return a && a[1] ? new _r(r, s, o, a[1]) : new wr(r, s, o)
            }
            var xr = r(9367),
                Cr = r(8639);

            function Ur(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            const jr = "base10",
                Dr = "base16",
                Lr = "base64pad",
                Mr = "utf8",
                kr = 0,
                qr = 1,
                zr = 0,
                Hr = 1,
                Vr = 12,
                Br = 32;

            function Fr() {
                return tt((0, _.randomBytes)(Br), Dr)
            }

            function Kr(e) {
                return tt((0, E.tW)(et(e, Mr)), Dr)
            }

            function Wr(e) {
                return Number(tt(e, jr))
            }

            function Jr(e) {
                const t = function(e) {
                    return et("".concat(e), jr)
                }(typeof e.type < "u" ? e.type : kr);
                if (Wr(t) === qr && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                const r = typeof e.senderPublicKey < "u" ? et(e.senderPublicKey, Dr) : void 0,
                    n = typeof e.iv < "u" ? et(e.iv, Dr) : (0, _.randomBytes)(Vr);
                return function(e) {
                    if (Wr(e.type) === qr) {
                        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                        return tt(P([e.type, e.senderPublicKey, e.iv, e.sealed]), Lr)
                    }
                    return tt(P([e.type, e.iv, e.sealed]), Lr)
                }({
                    type: t,
                    sealed: new w.g6(et(e.symKey, Dr)).seal(n, et(e.message, Mr)),
                    iv: n,
                    senderPublicKey: r
                })
            }

            function Gr(e) {
                const t = et(e, Lr),
                    r = t.slice(zr, Hr),
                    n = Hr;
                if (Wr(r) === qr) {
                    const e = n + Br,
                        i = e + Vr,
                        s = t.slice(n, e),
                        o = t.slice(e, i);
                    return {
                        type: r,
                        sealed: t.slice(i),
                        iv: o,
                        senderPublicKey: s
                    }
                }
                const i = n + Vr,
                    s = t.slice(n, i);
                return {
                    type: r,
                    sealed: t.slice(i),
                    iv: s
                }
            }

            function Yr(e) {
                const t = (null === e || void 0 === e ? void 0 : e.type) || kr;
                if (t === qr) {
                    if (typeof(null === e || void 0 === e ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
                    if (typeof(null === e || void 0 === e ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: null === e || void 0 === e ? void 0 : e.senderPublicKey,
                    receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
                }
            }

            function Qr(e) {
                return e.type === qr && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var $r = Object.defineProperty,
                Xr = Object.getOwnPropertySymbols,
                Zr = Object.prototype.hasOwnProperty,
                en = Object.prototype.propertyIsEnumerable,
                tn = (e, t, r) => t in e ? $r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rn = (e, t) => {
                    for (var r in t || (t = {})) Zr.call(t, r) && tn(e, r, t[r]);
                    if (Xr)
                        for (var r of Xr(t)) en.call(t, r) && tn(e, r, t[r]);
                    return e
                };
            const nn = "ReactNative",
                sn = {
                    reactNative: "react-native",
                    node: "node",
                    browser: "browser",
                    unknown: "unknown"
                },
                on = "js";

            function an() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }

            function cn() {
                return !(0, nt.getDocument)() && !!(0, nt.getNavigator)() && navigator.product === nn
            }

            function un() {
                return !an() && !!(0, nt.getNavigator)() && !!(0, nt.getDocument)()
            }

            function hn() {
                return cn() ? sn.reactNative : an() ? sn.node : un() ? sn.browser : sn.unknown
            }

            function ln(e, t, n) {
                const i = function() {
                        if (hn() === sn.reactNative && typeof r.g < "u" && typeof(null == r.g ? void 0 : r.g.Platform) < "u") {
                            const {
                                OS: e,
                                Version: t
                            } = r.g.Platform;
                            return [e, t].join("-")
                        }
                        const e = Ar();
                        if (null === e) return "unknown";
                        const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                    }(),
                    s = function() {
                        var e;
                        const t = hn();
                        return t === sn.browser ? [t, (null == (e = (0, nt.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                    }();
                return [
                    [e, t].join("-"), [on, n].join("-"), i, s
                ].join("/")
            }

            function pn(e) {
                let {
                    protocol: t,
                    version: r,
                    relayUrl: n,
                    sdkVersion: i,
                    auth: s,
                    projectId: o,
                    useOnCloseEvent: a,
                    bundleId: c
                } = e;
                const u = n.split("?"),
                    h = {
                        auth: s,
                        ua: ln(t, r, i),
                        projectId: o,
                        useOnCloseEvent: a || void 0,
                        origin: c || void 0
                    },
                    l = function(e, t) {
                        let r = Cr.parse(e);
                        return r = rn(rn({}, r), t), Cr.stringify(r)
                    }(u[1] || "", h);
                return u[0] + "?" + l
            }

            function fn(e, t) {
                return e.filter((e => t.includes(e))).length === e.length
            }

            function dn(e) {
                return Object.fromEntries(e.entries())
            }

            function gn(e) {
                return new Map(Object.entries(e))
            }

            function yn() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt.FIVE_MINUTES,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                const r = (0, rt.toMiliseconds)(e || rt.FIVE_MINUTES);
                let n, i, s;
                return {
                    resolve: e => {
                        s && n && (clearTimeout(s), n(e))
                    },
                    reject: e => {
                        s && i && (clearTimeout(s), i(e))
                    },
                    done: () => new Promise(((e, o) => {
                        s = setTimeout((() => {
                            o(new Error(t))
                        }), r), n = e, i = o
                    }))
                }
            }

            function vn(e, t, r) {
                return new Promise((async (n, i) => {
                    const s = setTimeout((() => i(new Error(r))), t);
                    try {
                        n(await e)
                    } catch (o) {
                        i(o)
                    }
                    clearTimeout(s)
                }))
            }

            function mn(e, t) {
                if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
                    return "topic:".concat(t)
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
                    return "id:".concat(t)
                }
                throw new Error("Unknown expirer target type: ".concat(e))
            }

            function wn(e) {
                const [t, r] = e.split(":"), n = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) n.topic = r;
                else {
                    if ("id" !== t || !Number.isInteger(Number(r))) throw new Error("Invalid target, expected id:number or topic:string, got ".concat(t, ":").concat(r));
                    n.id = Number(r)
                }
                return n
            }

            function bn(e, t) {
                return (0, rt.fromMiliseconds)((t || Date.now()) + (0, rt.toMiliseconds)(e))
            }

            function _n(e) {
                return Date.now() >= (0, rt.toMiliseconds)(e)
            }

            function En(e, t) {
                return "".concat(e).concat(t ? ":".concat(t) : "")
            }

            function In(e) {
                return (null === e || void 0 === e ? void 0 : e.relay) || {
                    protocol: "irn"
                }
            }

            function Sn(e) {
                const t = it[e];
                if (typeof t > "u") throw new Error("Relay Protocol not supported: ".concat(e));
                return t
            }
            var On = Object.defineProperty,
                Pn = Object.defineProperties,
                Nn = Object.getOwnPropertyDescriptors,
                An = Object.getOwnPropertySymbols,
                Rn = Object.prototype.hasOwnProperty,
                Tn = Object.prototype.propertyIsEnumerable,
                xn = (e, t, r) => t in e ? On(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;

            function Cn(e) {
                const t = {},
                    r = "relay" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-");
                return Object.keys(e).forEach((n => {
                    if (n.startsWith(r)) {
                        const i = n.replace(r, ""),
                            s = e[n];
                        t[i] = s
                    }
                })), t
            }

            function Un(e) {
                const t = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":"),
                    r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = e.substring(0, t),
                    i = e.substring(t + 1, r).split("@"),
                    s = typeof r < "u" ? e.substring(r) : "",
                    o = Cr.parse(s);
                return {
                    protocol: n,
                    topic: jn(i[0]),
                    version: parseInt(i[1], 10),
                    symKey: o.symKey,
                    relay: Cn(o),
                    expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0
                }
            }

            function jn(e) {
                return e.startsWith("//") ? e.substring(2) : e
            }

            function Dn(e) {
                return "".concat(e.protocol, ":").concat(e.topic, "@").concat(e.version, "?") + Cr.stringify(((e, t) => Pn(e, Nn(t)))(((e, t) => {
                    for (var r in t || (t = {})) Rn.call(t, r) && xn(e, r, t[r]);
                    if (An)
                        for (var r of An(t)) Tn.call(t, r) && xn(e, r, t[r]);
                    return e
                })({
                    symKey: e.symKey
                }, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                    const r = {};
                    return Object.keys(e).forEach((n => {
                        const i = "relay" + t + n;
                        e[n] && (r[i] = e[n])
                    })), r
                }(e.relay)), {
                    expiryTimestamp: e.expiryTimestamp
                }))
            }
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function Ln(e) {
                const t = [];
                return e.forEach((e => {
                    const [r, n] = e.split(":");
                    t.push("".concat(r, ":").concat(n))
                })), t
            }
            const Mn = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                kn = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function qn(e, t) {
                const {
                    message: r,
                    code: n
                } = kn[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: n
                }
            }

            function zn(e, t) {
                const {
                    message: r,
                    code: n
                } = Mn[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: n
                }
            }

            function Hn(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }

            function Vn(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function Bn(e) {
                return typeof e > "u"
            }

            function Fn(e, t) {
                return !(!t || !Bn(e)) || "string" == typeof e && !!e.trim().length
            }

            function Kn(e, t) {
                return !(!t || !Bn(e)) || "number" == typeof e && !isNaN(e)
            }

            function Wn(e) {
                return !(!Fn(e, !1) || !e.includes(":")) && 2 === e.split(":").length
            }

            function Jn(e) {
                let t = !0;
                return Hn(e) ? e.length && (t = e.every((e => Fn(e, !1)))) : t = !1, t
            }

            function Gn(e, t, r) {
                let n = null;
                return Object.entries(e).forEach((e => {
                    let [i, s] = e;
                    if (n) return;
                    const o = function(e, t, r) {
                        let n = null;
                        return Hn(t) && t.length ? t.forEach((e => {
                            n || Wn(e) || (n = zn("UNSUPPORTED_CHAINS", "".concat(r, ", chain ").concat(e, ' should be a string and conform to "namespace:chainId" format')))
                        })) : Wn(e) || (n = zn("UNSUPPORTED_CHAINS", "".concat(r, ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'))), n
                    }(i, Ur(i, s), "".concat(t, " ").concat(r));
                    o && (n = o)
                })), n
            }

            function Yn(e, t) {
                let r = null;
                return Hn(e) ? e.forEach((e => {
                    r || function(e) {
                        if (Fn(e, !1) && e.includes(":")) {
                            const t = e.split(":");
                            if (3 === t.length) {
                                const e = t[0] + ":" + t[1];
                                return !!t[2] && Wn(e)
                            }
                        }
                        return !1
                    }(e) || (r = zn("UNSUPPORTED_ACCOUNTS", "".concat(t, ", account ").concat(e, ' should be a string and conform to "namespace:chainId:address" format')))
                })) : r = zn("UNSUPPORTED_ACCOUNTS", "".concat(t, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')), r
            }

            function Qn(e, t) {
                let r = null;
                return Object.values(e).forEach((e => {
                    if (r) return;
                    const n = function(e, t) {
                        let r = null;
                        return Jn(null === e || void 0 === e ? void 0 : e.methods) ? Jn(null === e || void 0 === e ? void 0 : e.events) || (r = zn("UNSUPPORTED_EVENTS", "".concat(t, ", events should be an array of strings or empty array for no events"))) : r = zn("UNSUPPORTED_METHODS", "".concat(t, ", methods should be an array of strings or empty array for no methods")), r
                    }(e, "".concat(t, ", namespace"));
                    n && (r = n)
                })), r
            }

            function $n(e, t) {
                let r = null;
                if (e && Vn(e)) {
                    const n = Qn(e, t);
                    n && (r = n);
                    const i = function(e, t) {
                        let r = null;
                        return Object.values(e).forEach((e => {
                            if (r) return;
                            const n = Yn(null === e || void 0 === e ? void 0 : e.accounts, "".concat(t, " namespace"));
                            n && (r = n)
                        })), r
                    }(e, t);
                    i && (r = i)
                } else r = qn("MISSING_OR_INVALID", "".concat(t, ", namespaces should be an object with data"));
                return r
            }

            function Xn(e) {
                return Fn(e.protocol, !0)
            }

            function Zn(e) {
                return typeof e < "u" && null !== typeof e
            }

            function ei(e, t) {
                return !(!Wn(t) || ! function(e) {
                    const t = [];
                    return Object.values(e).forEach((e => {
                        t.push(...Ln(e.accounts))
                    })), t
                }(e).includes(t))
            }

            function ti(e, t, r) {
                return !!Fn(r, !1) && function(e, t) {
                    const r = [];
                    return Object.values(e).forEach((e => {
                        Ln(e.accounts).includes(t) && r.push(...e.methods)
                    })), r
                }(e, t).includes(r)
            }

            function ri(e, t, r) {
                return !!Fn(r, !1) && function(e, t) {
                    const r = [];
                    return Object.values(e).forEach((e => {
                        Ln(e.accounts).includes(t) && r.push(...e.events)
                    })), r
                }(e, t).includes(r)
            }

            function ni(e, t, r) {
                let n = null;
                const i = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((r => {
                            var n;
                            r.includes(":") ? t[r] = e[r] : null == (n = e[r].chains) || n.forEach((n => {
                                t[n] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            }))
                        })), t
                    }(e),
                    s = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                const n = Ln(e[r].accounts);
                                null === n || void 0 === n || n.forEach((n => {
                                    t[n] = {
                                        accounts: e[r].accounts.filter((e => e.includes("".concat(n, ":")))),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                }))
                            }
                        })), t
                    }(t),
                    o = Object.keys(i),
                    a = Object.keys(s),
                    c = ii(Object.keys(e)),
                    u = ii(Object.keys(t)),
                    h = c.filter((e => !u.includes(e)));
                return h.length && (n = qn("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(h.toString(), "\n      Received: ").concat(Object.keys(t).toString()))), fn(o, a) || (n = qn("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces chains don't satisfy required namespaces.\n      Required: ").concat(o.toString(), "\n      Approved: ").concat(a.toString()))), Object.keys(t).forEach((e => {
                    if (!e.includes(":") || n) return;
                    const i = Ln(t[e].accounts);
                    i.includes(e) || (n = qn("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces accounts don't satisfy namespace accounts for ").concat(e, "\n        Required: ").concat(e, "\n        Approved: ").concat(i.toString())))
                })), o.forEach((e => {
                    n || (fn(i[e].methods, s[e].methods) ? fn(i[e].events, s[e].events) || (n = qn("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces events don't satisfy namespace events for ").concat(e))) : n = qn("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces methods don't satisfy namespace methods for ").concat(e)))
                })), n
            }

            function ii(e) {
                return [...new Set(e.map((e => e.includes(":") ? e.split(":")[0] : e)))]
            }

            function si() {
                const e = hn();
                return new Promise((t => {
                    switch (e) {
                        case sn.browser:
                            t(function() {
                                var e;
                                return un() && (null === (e = navigator) || void 0 === e ? void 0 : e.onLine)
                            }());
                            break;
                        case sn.reactNative:
                            t(async function() {
                                if (cn() && typeof r.g < "u" && null != r.g && r.g.NetInfo) {
                                    const e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                                    return null === e || void 0 === e ? void 0 : e.isConnected
                                }
                                return !0
                            }());
                            break;
                        case sn.node:
                        default:
                            t(!0)
                    }
                }))
            }

            function oi(e) {
                switch (hn()) {
                    case sn.browser:
                        ! function(e) {
                            !cn() && un() && (window.addEventListener("online", (() => e(!0))), window.addEventListener("offline", (() => e(!1))))
                        }(e);
                        break;
                    case sn.reactNative:
                        ! function(e) {
                            var t;
                            cn() && typeof r.g < "u" && null != r.g && r.g.NetInfo && (null === (t = r.g) || void 0 === t || t.NetInfo.addEventListener((t => e(null === t || void 0 === t ? void 0 : t.isConnected))))
                        }(e);
                    case sn.node:
                }
            }
            const ai = {};
            class ci {
                static get(e) {
                    return ai[e]
                }
                static set(e, t) {
                    ai[e] = t
                }
                static delete(e) {
                    delete ai[e]
                }
            }
            var ui = r(1480);
            class hi extends ui.IJsonRpcProvider {
                constructor(e) {
                    super(e), this.events = new v.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, ui.formatJsonRpcRequest)(e.method, e.params || [], e.id || (0, ui.getBigIntRpcId)().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise((async (r, n) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (i) {
                            n(i)
                        }
                        this.events.on("".concat(e.id), (e => {
                            (0, ui.isJsonRpcError)(e) ? n(e.error): r(e.result)
                        }));
                        try {
                            await this.connection.send(e, t)
                        } catch (i) {
                            n(i)
                        }
                    }))
                }
                setConnection() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, ui.isJsonRpcResponse)(e) ? this.events.emit("".concat(e.id), e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error("WebSocket connection closed abnormally with code: ".concat(e.code, " ").concat(e.reason ? "(".concat(e.reason, ")") : ""))), this.events.emit("disconnect")
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (e => this.onClose(e))), this.connection.on("error", (e => this.events.emit("error", e))), this.connection.on("register_error", (e => this.onClose())), this.hasRegisteredEventListeners = !0)
                }
            }
            const li = e => e.split("?")[0],
                pi = typeof WebSocket < "u" ? WebSocket : typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : r(5789);
            class fi {
                constructor(e) {
                    if (this.url = e, this.events = new v.EventEmitter, this.registering = !1, !(0, ui.isWsUrl)(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                    this.url = e
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(e)
                }
                async close() {
                    return new Promise(((e, t) => {
                        typeof this.socket > "u" ? t(new Error("Connection already closed")) : (this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close())
                    }))
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send(Ut(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, ui.isWsUrl)(e)) throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                    if (this.registering) {
                        const e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                            this.events.once("register_error", (e => {
                                this.resetMaxListeners(), t(e)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(new Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            }))
                        }))
                    }
                    return this.url = e, this.registering = !0, new Promise(((t, n) => {
                        const i = new URLSearchParams(e).get("origin"),
                            s = (0, ui.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !(0, ui.isLocalhostUrl)(e)
                            },
                            o = new pi(e, [], s);
                        typeof WebSocket < "u" || typeof r.g < "u" && typeof r.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? o.onerror = e => {
                            const t = e;
                            n(this.emitError(t.error))
                        } : o.on("error", (e => {
                            n(this.emitError(e))
                        })), o.onopen = () => {
                            this.onOpen(o), t(o)
                        }
                    }))
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    const t = "string" == typeof e.data ? Ct(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const r = this.parseError(t),
                        n = r.message || r.toString(),
                        i = (0, ui.formatJsonRpcError)(e, n);
                    this.events.emit("payload", i)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, ui.parseConnectionError)(e, li(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    const t = this.parseError(new Error((null === e || void 0 === e ? void 0 : e.message) || "WebSocket connection failed for host: ".concat(li(this.url))));
                    return this.events.emit("register_error", t), t
                }
            }
            var di = r(1587),
                gi = r.n(di),
                yi = r(6210),
                vi = r.n(yi);
            var mi = function(e, t) {
                    if (e.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                    for (var i = 0; i < e.length; i++) {
                        var s = e.charAt(i),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                        r[o] = i
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        h = Math.log(256) / Math.log(a);

                    function l(e) {
                        if ("string" != typeof e) throw new TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[t]) {
                            for (var n = 0, i = 0; e[t] === c;) n++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var h = r[e.charCodeAt(t)];
                                if (255 === h) return;
                                for (var l = 0, p = s - 1;
                                    (0 !== h || l < i) && -1 !== p; p--, l++) h += a * o[p] >>> 0, o[p] = h % 256 >>> 0, h = h / 256 >>> 0;
                                if (0 !== h) throw new Error("Non-zero carry");
                                i = l, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - i; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(n + (s - f)), g = n; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                            for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                                for (var l = t[i], p = 0, f = o - 1;
                                    (0 !== l || p < n) && -1 !== f; f--, p++) l += 256 * u[f] >>> 0, u[f] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                n = p, i++
                            }
                            for (var d = o - n; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(e) {
                            var r = l(e);
                            if (r) return r;
                            throw new Error("Non-".concat(t, " character"))
                        }
                    }
                },
                wi = mi;
            const bi = e => {
                if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class _i {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
                    throw Error("Unknown type, must be binary type")
                }
            }
            class Ei {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return Si(this, e)
                }
            }
            class Ii {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return Si(this, e)
                }
                decode(e) {
                    const t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                }
            }
            const Si = (e, t) => new Ii({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class Oi {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new _i(e, t, r), this.decoder = new Ei(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const Pi = e => {
                    let {
                        name: t,
                        prefix: r,
                        encode: n,
                        decode: i
                    } = e;
                    return new Oi(t, r, n, i)
                },
                Ni = e => {
                    let {
                        prefix: t,
                        name: r,
                        alphabet: n
                    } = e;
                    const {
                        encode: i,
                        decode: s
                    } = wi(n, r);
                    return Pi({
                        prefix: t,
                        name: r,
                        encode: i,
                        decode: e => bi(s(e))
                    })
                },
                Ai = e => {
                    let {
                        name: t,
                        prefix: r,
                        bitsPerChar: n,
                        alphabet: i
                    } = e;
                    return Pi({
                        prefix: r,
                        name: t,
                        encode: e => ((e, t, r) => {
                            const n = "=" === t[t.length - 1],
                                i = (1 << r) - 1;
                            let s = "",
                                o = 0,
                                a = 0;
                            for (let c = 0; c < e.length; ++c)
                                for (a = a << 8 | e[c], o += 8; o > r;) o -= r, s += t[i & a >> o];
                            if (o && (s += t[i & a << r - o]), n)
                                for (; s.length * r & 7;) s += "=";
                            return s
                        })(e, i, n),
                        decode: e => ((e, t, r, n) => {
                            const i = {};
                            for (let h = 0; h < t.length; ++h) i[t[h]] = h;
                            let s = e.length;
                            for (;
                                "=" === e[s - 1];) --s;
                            const o = new Uint8Array(s * r / 8 | 0);
                            let a = 0,
                                c = 0,
                                u = 0;
                            for (let h = 0; h < s; ++h) {
                                const t = i[e[h]];
                                if (void 0 === t) throw new SyntaxError("Non-".concat(n, " character"));
                                c = c << r | t, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                            }
                            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                            return o
                        })(e, i, n, t)
                    })
                },
                Ri = Pi({
                    prefix: "\0",
                    name: "identity",
                    encode: e => (e => (new TextDecoder).decode(e))(e),
                    decode: e => (e => (new TextEncoder).encode(e))(e)
                });
            var Ti = Object.freeze({
                __proto__: null,
                identity: Ri
            });
            const xi = Ai({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Ci = Object.freeze({
                __proto__: null,
                base2: xi
            });
            const Ui = Ai({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var ji = Object.freeze({
                __proto__: null,
                base8: Ui
            });
            const Di = Ni({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Li = Object.freeze({
                __proto__: null,
                base10: Di
            });
            const Mi = Ai({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                ki = Ai({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var qi = Object.freeze({
                __proto__: null,
                base16: Mi,
                base16upper: ki
            });
            const zi = Ai({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Hi = Ai({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Vi = Ai({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Bi = Ai({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Fi = Ai({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Ki = Ai({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Wi = Ai({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Ji = Ai({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Gi = Ai({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Yi = Object.freeze({
                __proto__: null,
                base32: zi,
                base32upper: Hi,
                base32pad: Vi,
                base32padupper: Bi,
                base32hex: Fi,
                base32hexupper: Ki,
                base32hexpad: Wi,
                base32hexpadupper: Ji,
                base32z: Gi
            });
            const Qi = Ni({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                $i = Ni({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Xi = Object.freeze({
                __proto__: null,
                base36: Qi,
                base36upper: $i
            });
            const Zi = Ni({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                es = Ni({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var ts = Object.freeze({
                __proto__: null,
                base58btc: Zi,
                base58flickr: es
            });
            const rs = Ai({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ns = Ai({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                is = Ai({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ss = Ai({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var os = Object.freeze({
                __proto__: null,
                base64: rs,
                base64pad: ns,
                base64url: is,
                base64urlpad: ss
            });
            const as = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                cs = as.reduce(((e, t, r) => (e[r] = t, e)), []),
                us = as.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
            const hs = Pi({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(e) {
                    return e.reduce(((e, t) => e += cs[t]), "")
                },
                decode: function(e) {
                    const t = [];
                    for (const r of e) {
                        const e = us[r.codePointAt(0)];
                        if (void 0 === e) throw new Error("Non-base256emoji character: ".concat(r));
                        t.push(e)
                    }
                    return new Uint8Array(t)
                }
            });
            var ls = Object.freeze({
                    __proto__: null,
                    base256emoji: hs
                }),
                ps = function e(t, r, n) {
                    r = r || [];
                    for (var i = n = n || 0; t >= gs;) r[n++] = 255 & t | fs, t /= 128;
                    for (; t & ds;) r[n++] = 255 & t | fs, t >>>= 7;
                    return r[n] = 0 | t, e.bytes = n - i + 1, r
                },
                fs = 128,
                ds = -128,
                gs = Math.pow(2, 31);
            var ys = function e(t, r) {
                    var n, i = 0,
                        s = 0,
                        o = r = r || 0,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
                        n = t[o++], i += s < 28 ? (n & ms) << s : (n & ms) * Math.pow(2, s), s += 7
                    } while (n >= vs);
                    return e.bytes = o - r, i
                },
                vs = 128,
                ms = 127;
            var ws = Math.pow(2, 7),
                bs = Math.pow(2, 14),
                _s = Math.pow(2, 21),
                Es = Math.pow(2, 28),
                Is = Math.pow(2, 35),
                Ss = Math.pow(2, 42),
                Os = Math.pow(2, 49),
                Ps = Math.pow(2, 56),
                Ns = Math.pow(2, 63),
                As = {
                    encode: ps,
                    decode: ys,
                    encodingLength: function(e) {
                        return e < ws ? 1 : e < bs ? 2 : e < _s ? 3 : e < Es ? 4 : e < Is ? 5 : e < Ss ? 6 : e < Os ? 7 : e < Ps ? 8 : e < Ns ? 9 : 10
                    }
                },
                Rs = As;
            const Ts = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return Rs.encode(e, t, r), t
                },
                xs = e => Rs.encodingLength(e),
                Cs = (e, t) => {
                    const r = t.byteLength,
                        n = xs(e),
                        i = n + xs(r),
                        s = new Uint8Array(i + r);
                    return Ts(e, s, 0), Ts(r, s, n), s.set(t, i), new Us(e, r, t, s)
                };
            class Us {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            const js = e => {
                let {
                    name: t,
                    code: r,
                    encode: n
                } = e;
                return new Ds(t, r, n)
            };
            class Ds {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Cs(this.code, t) : t.then((e => Cs(this.code, e)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Ls = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                Ms = js({
                    name: "sha2-256",
                    code: 18,
                    encode: Ls("SHA-256")
                }),
                ks = js({
                    name: "sha2-512",
                    code: 19,
                    encode: Ls("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Ms,
                sha512: ks
            });
            const qs = bi,
                zs = {
                    code: 0,
                    name: "identity",
                    encode: qs,
                    digest: e => Cs(0, qs(e))
                };
            Object.freeze({
                __proto__: null,
                identity: zs
            });
            new TextEncoder, new TextDecoder;
            const Hs = { ...Ti,
                ...Ci,
                ...ji,
                ...Li,
                ...qi,
                ...Yi,
                ...Xi,
                ...ts,
                ...os,
                ...ls
            };

            function Vs(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function Bs(e, t, r, n) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }
            const Fs = Bs("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
                Ks = Bs("ascii", "a", (e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }), (e => {
                    const t = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Vs(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                })),
                Ws = {
                    utf8: Fs,
                    "utf-8": Fs,
                    hex: Hs.base16,
                    latin1: Ks,
                    ascii: Ks,
                    binary: Ks,
                    ...Hs
                };
            const Js = "core",
                Gs = "".concat("wc", "@2:").concat(Js, ":"),
                Ys = "error",
                Qs = {
                    database: ":memory:"
                },
                $s = "client_ed25519_seed",
                Xs = rt.ONE_DAY,
                Zs = rt.SIX_HOURS,
                eo = "wss://relay.walletconnect.com",
                to = "wss://relay.walletconnect.org",
                ro = "relayer_message",
                no = "relayer_message_ack",
                io = "relayer_connect",
                so = "relayer_disconnect",
                oo = "relayer_error",
                ao = "relayer_connection_stalled",
                co = "relayer_publish",
                uo = "payload",
                ho = "connect",
                lo = "disconnect",
                po = "error",
                fo = rt.ONE_SECOND,
                go = "subscription_created",
                yo = "subscription_deleted",
                vo = "subscription_sync",
                mo = "subscription_resubscribed",
                wo = 1e3 * rt.FIVE_SECONDS,
                bo = {
                    wc_pairingDelete: {
                        req: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: rt.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: rt.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                _o = "pairing_create",
                Eo = "pairing_expire",
                Io = "pairing_delete",
                So = "pairing_ping",
                Oo = "history_created",
                Po = "history_updated",
                No = "history_deleted",
                Ao = "history_sync",
                Ro = "expirer_created",
                To = "expirer_deleted",
                xo = "expirer_expired",
                Co = "expirer_sync",
                Uo = "verify-api",
                jo = "https://verify.walletconnect.com",
                Do = "https://verify.walletconnect.org",
                Lo = [jo, Do];
            class Mo {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Gs, this.init = async () => {
                        if (!this.initialized) {
                            const e = await this.getKeyChain();
                            typeof e < "u" && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.keychain.get(e);
                        if (typeof t > "u") {
                            const {
                                message: t
                            } = qn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                            throw new Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, Bt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, dn(e))
                }
                async getKeyChain() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? gn(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ko {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        return gr(yr(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const e = function() {
                            const e = I.TZ();
                            return {
                                privateKey: tt(e.secretKey, Dr),
                                publicKey: tt(e.publicKey, Dr)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        const t = yr(await this.getClientSeed()),
                            r = Fr(),
                            n = Xs;
                        return await vr(r, e, n, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        const n = function(e, t) {
                            const r = I.Tc(et(e, Dr), et(t, Dr), !0);
                            return tt(new b.i(E.aD, r).expand(Br), Dr)
                        }(this.getPrivateKey(e), t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        const r = t || function(e) {
                            return tt((0, E.tW)(et(e, Dr)), Dr)
                        }(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        const n = Yr(r),
                            i = Ut(t);
                        if (Qr(n)) {
                            const t = n.senderPublicKey,
                                r = n.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        const s = this.getSymKey(e),
                            {
                                type: o,
                                senderPublicKey: a
                            } = n;
                        return Jr({
                            type: o,
                            symKey: s,
                            message: i,
                            senderPublicKey: a
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        const n = function(e, t) {
                            const r = Gr(e);
                            return Yr({
                                type: Wr(r.type),
                                senderPublicKey: typeof r.senderPublicKey < "u" ? tt(r.senderPublicKey, Dr) : void 0,
                                receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
                            })
                        }(t, r);
                        if (Qr(n)) {
                            const t = n.receiverPublicKey,
                                r = n.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            const r = function(e) {
                                const t = new w.g6(et(e.symKey, Dr)),
                                    {
                                        sealed: r,
                                        iv: n
                                    } = Gr(e.encoded),
                                    i = t.open(n, r);
                                if (null === i) throw new Error("Failed to decrypt");
                                return tt(i, Mr)
                            }({
                                symKey: this.getSymKey(e),
                                encoded: t
                            });
                            return Ct(r)
                        } catch (Ht) {
                            this.logger.error("Failed to decode message from topic: '".concat(e, "', clientId: '").concat(await this.getClientId(), "'")), this.logger.error(Ht)
                        }
                    }, this.getPayloadType = e => Wr(Gr(e).type), this.getPayloadSenderPublicKey = e => {
                        const t = Gr(e);
                        return t.senderPublicKey ? tt(t.senderPublicKey, Dr) : void 0
                    }, this.core = e, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.keychain = r || new Mo(this.core, this.logger)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get($s)
                    } catch {
                        e = Fr(), await this.keychain.set($s, e)
                    }
                    return function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                        const r = Ws[t];
                        if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'));
                        return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode("".concat(r.prefix).concat(e)) : Vs(globalThis.Buffer.from(e, "utf-8"))
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class qo extends Jt {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Gs, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const e = await this.getRelayerMessages();
                                typeof e < "u" && (this.messages = e), this.logger.debug("Successfully Restored records for ".concat(this.name)), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug("Failed to Restore records for ".concat(this.name)), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        const r = Kr(t);
                        let n = this.messages.get(e);
                        return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = t, this.messages.set(e, n), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        return typeof this.get(e)[Kr(t)] < "u"
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, Bt.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, dn(e))
                }
                async getRelayerMessages() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? gn(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class zo extends Gt {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new v.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, rt.toMiliseconds)(2 * rt.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var n;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            const i = (null === r || void 0 === r ? void 0 : r.ttl) || Zs,
                                s = In(r),
                                o = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                                a = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                                c = (null === r || void 0 === r ? void 0 : r.id) || (0, ui.getBigIntRpcId)().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: i,
                                        relay: s,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                h = setTimeout((() => this.queue.set(c, u)), this.publishTimeout);
                            try {
                                await await vn(this.rpcPublish(e, t, i, s, o, a, c), this.publishTimeout, "Failed to publish payload, please try again. id:".concat(c, " tag:").concat(a)), this.removeRequestFromQueue(c), this.relayer.events.emit(co, u)
                            } catch (Gt) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (n = null === r || void 0 === r ? void 0 : r.internal) && n.throwOnFailedPublish) throw this.removeRequestFromQueue(c), Gt;
                                return
                            } finally {
                                clearTimeout(h)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (Jt) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(Jt), Jt
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, n, i, s, o) {
                    var a, c, u, h;
                    const l = {
                        method: Sn(n.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: i,
                            tag: s
                        },
                        id: o
                    };
                    return Bn(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt), Bn(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: l
                    }), this.relayer.request(l)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach((async e => {
                        const {
                            topic: t,
                            message: r,
                            opts: n
                        } = e;
                        await this.publish(t, r, n)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Vt.HEARTBEAT_EVENTS.pulse, (() => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(ao);
                        this.checkQueue()
                    })), this.relayer.on(no, (e => {
                        this.removeRequestFromQueue(e.id.toString())
                    }))
                }
            }
            class Ho {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const r = this.get(e);
                        if (!this.exists(e, t)) return;
                        const n = r.filter((e => e !== t));
                        n.length ? this.map.set(e, n) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Vo = Object.defineProperty,
                Bo = Object.defineProperties,
                Fo = Object.getOwnPropertyDescriptors,
                Ko = Object.getOwnPropertySymbols,
                Wo = Object.prototype.hasOwnProperty,
                Jo = Object.prototype.propertyIsEnumerable,
                Go = (e, t, r) => t in e ? Vo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Yo = (e, t) => {
                    for (var r in t || (t = {})) Wo.call(t, r) && Go(e, r, t[r]);
                    if (Ko)
                        for (var r of Ko(t)) Jo.call(t, r) && Go(e, r, t[r]);
                    return e
                },
                Qo = (e, t) => Bo(e, Fo(t));
            class $o extends $t {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Ho, this.events = new v.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Gs, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            const r = In(t),
                                n = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, n);
                            const i = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(i, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), i
                        } catch (r) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), typeof(null === t || void 0 === t ? void 0 : t.id) < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => {
                        if (this.topics.includes(e)) return !0;
                        const t = "".concat(this.pendingSubscriptionWatchLabel, "_").concat(e);
                        return await new Promise(((r, n) => {
                            const i = new rt.Watch;
                            i.start(t);
                            const s = setInterval((() => {
                                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(s), i.stop(t), r(!0)), i.elapsed(t) >= wo && (clearInterval(s), i.stop(t), n(new Error("Subscription resolution timeout")))
                            }), this.pollingInterval)
                        })).catch((() => !1))
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    const r = this.topicMap.get(e);
                    await Promise.all(r.map((async r => await this.unsubscribeById(e, r, t))))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        const n = In(r);
                        await this.rpcUnsubscribe(e, t, n);
                        const i = zn("USER_DISCONNECTED", "".concat(this.name, ", ").concat(e));
                        await this.onUnsubscribe(e, t, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (n) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n
                    }
                }
                async rpcSubscribe(e, t) {
                    const r = {
                        method: Sn(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await vn(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ao)
                    }
                    return Kr(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    const t = {
                        method: Sn(e[0].relay.protocol).batchSubscribe,
                        params: {
                            topics: e.map((e => e.topic))
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: t
                    });
                    try {
                        return await await vn(this.relayer.request(t), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ao)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    const n = {
                        method: Sn(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: n
                    }), this.relayer.request(n)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, Qo(Yo({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach((e => {
                        this.setSubscription(e.id, Yo({}, e)), this.pending.delete(e.topic)
                    }))
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, Yo({}, t)), this.topicMap.set(t.topic, e), this.events.emit(go, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw new Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(yo, Qo(Yo({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(vo)
                }
                async reset() {
                    if (this.cached.length) {
                        const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(mo)
                }
                async restore() {
                    try {
                        const e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: e
                            } = qn("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))), new Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    const t = await this.rpcBatchSubscribe(e);
                    Hn(t) && this.onBatchSubscribe(t.map(((t, r) => Qo(Yo({}, e[r]), {
                        id: t
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    const e = [];
                    this.pending.forEach((t => {
                        e.push(t)
                    })), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Vt.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(io, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(so, (() => {
                        this.onDisconnect()
                    })), this.events.on(go, (async e => {
                        const t = go;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })), this.events.on(yo, (async e => {
                        const t = yo;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((e => {
                        const t = setInterval((() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }), this.pollingInterval)
                    }))
                }
            }
            var Xo = Object.defineProperty,
                Zo = Object.getOwnPropertySymbols,
                ea = Object.prototype.hasOwnProperty,
                ta = Object.prototype.propertyIsEnumerable,
                ra = (e, t, r) => t in e ? Xo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            class na extends Yt {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new v.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        const t = e.id,
                            r = this.provider.request(e);
                        this.requestsInFlight.set(t, {
                            promise: r,
                            request: e
                        });
                        try {
                            return await this.toEstablishConnection(), await r
                        } catch (n) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n
                        } finally {
                            this.requestsInFlight.delete(t)
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(io)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(oo, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(uo, this.onPayloadHandler), this.provider.on(ho, this.onConnectHandler), this.provider.on(lo, this.onDisconnectHandler), this.provider.on(po, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, Bt.generateChildLogger)(e.logger, this.name) : (0, Bt.pino)((0, Bt.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new qo(this.logger, e.core), this.subscriber = new $o(this, this.logger), this.publisher = new zo(this, this.logger), this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || eo, this.projectId = e.projectId, this.bundleId = function() {
                        var e;
                        try {
                            return cn() && typeof r.g < "u" && typeof(null == r.g ? void 0 : r.g.Application) < "u" ? null == (e = r.g.Application) ? void 0 : e.applicationId : void 0
                        } catch {
                            return
                        }
                    }(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn("Connection via ".concat(this.relayUrl, " failed, attempting to connect via failover domain ").concat(to, "...")), await this.restartTransport(to)
                    }
                    this.initialized = !0, setTimeout((async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }), 1e4)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let n, i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (i) return i;
                    const s = t => {
                        t.topic === e && (this.subscriber.off(go, s), n())
                    };
                    return await Promise.all([new Promise((e => {
                        n = e, this.subscriber.on(go, s)
                    })), new Promise((async r => {
                        i = await this.subscriber.subscribe(e, t), r()
                    }))]), i
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach((async e => {
                        await e.promise
                    }))), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await vn(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((() => this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise((e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(mo, (() => {
                                    e()
                                }))
                            })), new Promise((async (e, t) => {
                                try {
                                    await vn(this.provider.connect(), 1e4, "Socket stalled when trying to connect to ".concat(this.relayUrl))
                                } catch (r) {
                                    return void t(r)
                                }
                                e()
                            }))])
                        } catch (t) {
                            this.logger.error(t);
                            const e = t;
                            if (!this.isConnectionStalled(e.message)) throw t;
                            this.provider.events.emit(lo)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await si()) throw new Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some((t => e.includes(t)))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    const e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new hi(new fi(pn({
                        sdkVersion: "2.11.1",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    const {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    const {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug("Ignoring invalid/empty message: ".concat(r)), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug("Ignoring message for non-subscribed topic ".concat(t)), !0;
                    const n = this.messages.has(t, r);
                    return n && this.logger.debug("Ignoring duplicate message: ".concat(r)), n
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, ui.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        const t = e.params,
                            {
                                topic: r,
                                message: n,
                                publishedAt: i
                            } = t.data,
                            s = {
                                topic: r,
                                message: n,
                                publishedAt: i
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((e, t) => {
                            for (var r in t || (t = {})) ea.call(t, r) && ra(e, r, t[r]);
                            if (Zo)
                                for (var r of Zo(t)) ta.call(t, r) && ra(e, r, t[r]);
                            return e
                        })({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, ui.isJsonRpcResponse)(e) && this.events.emit(no, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ro, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    const t = (0, ui.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(uo, this.onPayloadHandler), this.provider.off(ho, this.onConnectHandler), this.provider.off(lo, this.onDisconnectHandler), this.provider.off(po, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(ao, (() => {
                        this.restartTransport().catch((e => this.logger.error(e)))
                    }));
                    let e = await si();
                    oi((async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((e => this.logger.error(e))) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((e => this.logger.error(e)))))
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit(so), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((async () => {
                        await this.restartTransport().catch((e => this.logger.error(e)))
                    }), (0, rt.toMiliseconds)(fo)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise((e => {
                            const t = setInterval((() => {
                                this.connected && (clearInterval(t), e())
                            }), this.connectionStatusPollingInterval)
                        }));
                        await this.restartTransport()
                    }
                }
            }
            var ia = Object.defineProperty,
                sa = Object.getOwnPropertySymbols,
                oa = Object.prototype.hasOwnProperty,
                aa = Object.prototype.propertyIsEnumerable,
                ca = (e, t, r) => t in e ? ia(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ua = (e, t) => {
                    for (var r in t || (t = {})) oa.call(t, r) && ca(e, r, t[r]);
                    if (sa)
                        for (var r of sa(t)) aa.call(t, r) && ca(e, r, t[r]);
                    return e
                };
            class ha extends Qt {
                constructor(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gs,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                    super(e, t, r, n), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Gs, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
                            this.getKey && null !== e && !Bn(e) ? this.map.set(this.getKey(e), e) : function(e) {
                                var t;
                                return null == (t = null === e || void 0 === e ? void 0 : e.proposer) ? void 0 : t.publicKey
                            }(e) ? this.map.set(e.id, e) : function(e) {
                                return null === e || void 0 === e ? void 0 : e.topic
                            }(e) && this.map.set(e.topic, e)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((r => gi()(t[r], e[r]))))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        const r = ua(ua({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.storagePrefix = n, this.getKey = i
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            const {
                                message: e
                            } = qn("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored value for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore value for ".concat(this.name)), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class la {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(m()), this.initialized = !1, this.storagePrefix = Gs, this.ignoredPayloadTypes = [qr], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = e => {
                        let {
                            methods: t
                        } = e;
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const e = Fr(),
                            t = await this.core.crypto.setSymKey(e),
                            r = bn(rt.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            i = {
                                topic: t,
                                expiry: r,
                                relay: n,
                                active: !1
                            },
                            s = Dn({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: n,
                                expiryTimestamp: r
                            });
                        return await this.pairings.set(t, i), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        const {
                            topic: t,
                            symKey: r,
                            relay: n,
                            expiryTimestamp: i
                        } = Un(e.uri);
                        let s;
                        if (this.pairings.keys.includes(t) && (s = this.pairings.get(t), s.active)) throw new Error("Pairing already exists: ".concat(t, ". Please try again with a new connection URI."));
                        const o = i || bn(rt.FIVE_MINUTES),
                            a = {
                                topic: t,
                                relay: n,
                                expiry: o,
                                active: !1
                            };
                        return await this.pairings.set(t, a), this.core.expirer.set(t, o), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(_o, a), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: n
                        })), a
                    }, this.activate = async e => {
                        let {
                            topic: t
                        } = e;
                        this.isInitialized();
                        const r = bn(rt.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: r
                        }), this.core.expirer.set(t, r)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            const e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = yn();
                            this.events.once(En("pairing_ping", e), (e => {
                                let {
                                    error: t
                                } = e;
                                t ? i(t) : n()
                            })), await r()
                        }
                    }, this.updateExpiry = async e => {
                        let {
                            topic: t,
                            expiry: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: r
                        })
                    }, this.updateMetadata = async e => {
                        let {
                            topic: t,
                            metadata: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: r
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", zn("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        const n = (0, ui.formatJsonRpcRequest)(t, r),
                            i = await this.core.crypto.encode(e, n),
                            s = bo[t].req;
                        return this.core.history.set(e, n), this.core.relayer.publish(e, i, s), n.id
                    }, this.sendResult = async (e, t, r) => {
                        const n = (0, ui.formatJsonRpcResult)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = bo[s.request.method].res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.sendError = async (e, t, r) => {
                        const n = (0, ui.formatJsonRpcError)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = bo[s.request.method] ? bo[s.request.method].res : bo.unregistered_method.res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, zn("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        const e = this.pairings.getAll().filter((e => _n(e.expiry)));
                        await Promise.all(e.map((e => this.deletePairing(e.topic))))
                    }, this.onRelayEventRequest = e => {
                        const {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === n ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(n)
                    }, this.onPairingPingRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(So, {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.logger.error(n)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        setTimeout((() => {
                            (0, ui.isJsonRpcResult)(t) ? this.events.emit(En("pairing_ping", r), {}): (0, ui.isJsonRpcError)(t) && this.events.emit(En("pairing_ping", r), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(Io, {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.logger.error(n)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        const {
                            id: r,
                            method: n
                        } = t;
                        try {
                            if (this.registeredMethods.includes(n)) return;
                            const t = zn("WC_METHOD_UNSUPPORTED", n);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (Jt) {
                            await this.sendError(r, e, Jt), this.logger.error(Jt)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(zn("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "pair() params: ".concat(e));
                            throw new Error(t)
                        }
                        if (! function(e) {
                                if (Fn(e, !1)) try {
                                    return typeof new URL(e) < "u"
                                } catch {
                                    return !1
                                }
                                return !1
                            }(e.uri)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "pair() uri: ".concat(e.uri));
                            throw new Error(t)
                        }
                        const r = Un(e.uri);
                        if (null == (t = null === r || void 0 === r ? void 0 : r.relay) || !t.protocol) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(e)
                        }
                        if (null == r || !r.symKey) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(e)
                        }
                        if (null != r && r.expiryTimestamp && (0, rt.toMiliseconds)(null === r || void 0 === r ? void 0 : r.expiryTimestamp) < Date.now()) {
                            const {
                                message: e
                            } = qn("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                            throw new Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "ping() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!Fn(e, !1)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                            throw new Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            const {
                                message: t
                            } = qn("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                            throw new Error(t)
                        }
                        if (_n(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            const {
                                message: t
                            } = qn("EXPIRED", "pairing topic: ".concat(e));
                            throw new Error(t)
                        }
                    }, this.core = e, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.pairings = new ha(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(ro, (async e => {
                        const {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        const n = await this.core.crypto.decode(t, r);
                        try {
                            (0, ui.isJsonRpcRequest)(n) ? (this.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : (0, ui.isJsonRpcResponse)(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.core.history.delete(t, n.id))
                        } catch (i) {
                            this.logger.error(i)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(xo, (async e => {
                        const {
                            topic: t
                        } = wn(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(Eo, {
                            topic: t
                        }))
                    }))
                }
            }
            class pa extends Wt {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new v.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Gs, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        const n = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: bn(rt.THIRTY_DAYS)
                        };
                        this.records.set(n.id, n), this.events.emit(Oo, n)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        const t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, ui.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(Po, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach((r => {
                            if (r.topic === e) {
                                if (typeof t < "u" && r.id !== t) return;
                                this.records.delete(r.id), this.events.emit(No, r)
                            }
                        }))
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, Bt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach((t => {
                        if (typeof t.response < "u") return;
                        const r = {
                            topic: t.topic,
                            request: (0, ui.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    })), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(Ao)
                }
                async restore() {
                    try {
                        const e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            const {
                                message: e
                            } = qn("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored records for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore records for ".concat(this.name)), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(Oo, (e => {
                        const t = Oo;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(Po, (e => {
                        const t = Po;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(No, (e => {
                        const t = No;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.core.heartbeat.on(Vt.HEARTBEAT_EVENTS.pulse, (() => {
                        this.cleanup()
                    }))
                }
                cleanup() {
                    try {
                        this.records.forEach((e => {
                            (0, rt.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info("Deleting expired history log: ".concat(e.id)), this.delete(e.topic, e.id))
                        }))
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class fa extends Xt {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new v.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Gs, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            const t = this.formatTarget(e);
                            return typeof this.getExpiration(t) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        const r = this.formatTarget(e),
                            n = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(Ro, {
                            target: r,
                            expiration: n
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            const t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(To, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, Bt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return function(e) {
                        return mn("topic", e)
                    }(e);
                    if ("number" == typeof e) return function(e) {
                        return mn("id", e)
                    }(e);
                    const {
                        message: t
                    } = qn("UNKNOWN_TYPE", "Target type: ".concat(typeof e));
                    throw new Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(Co)
                }
                async restore() {
                    try {
                        const e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            const {
                                message: e
                            } = qn("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored expirations for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore expirations for ".concat(this.name)), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: r
                    } = t;
                    (0, rt.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(xo, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(Vt.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(Ro, (e => {
                        const t = Ro;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(xo, (e => {
                        const t = xo;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(To, (e => {
                        const t = To;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class da extends Zt {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = Uo, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || cn() || !un()) return;
                        const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (r) {
                            this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)), this.logger.info(r)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = Do;
                            try {
                                await this.createIframe()
                            } catch (r) {
                                this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)), this.logger.info(r), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        if (this.isDevEnv) return "";
                        const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                        let r;
                        try {
                            r = await this.fetchAttestation(e.attestationId, t)
                        } catch (n) {
                            this.logger.info("failed to resolve attestation: ".concat(e.attestationId, " from url: ").concat(t)), this.logger.info(n), r = await this.fetchAttestation(e.attestationId, Do)
                        }
                        return r
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info("resolving attestation: ".concat(e, " from url: ").concat(t));
                        const r = this.startAbortTimer(2 * rt.ONE_SECOND),
                            n = await fetch("".concat(t, "/attestation/").concat(e), {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === n.status ? await n.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach((e => this.sendPost(e))), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info("postMessage sent: ".concat(e, " ").concat(this.verifyUrl))
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        const t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise((r => {
                            if (document.getElementById(Uo)) return r();
                            window.addEventListener("message", t);
                            const n = document.createElement("iframe");
                            n.id = Uo, n.src = "".concat(this.verifyUrl, "/").concat(this.projectId), n.style.display = "none", document.body.append(n), this.iframe = n, e = r
                        })), new Promise(((e, r) => setTimeout((() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }), (0, rt.toMiliseconds)(rt.FIVE_SECONDS))))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || jo;
                        return Lo.includes(t) || (this.logger.info("verify url: ".concat(t, ", not included in trusted list, assigning default: ").concat(jo)), t = jo), t
                    }, this.logger = (0, Bt.generateChildLogger)(t, this.name), this.verifyUrl = jo, this.abortController = new AbortController, this.isDevEnv = an() && {
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0
                    }.IS_VITEST
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout((() => this.abortController.abort()), (0, rt.toMiliseconds)(e))
                }
            }
            class ga extends er {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        const {
                            clientId: t,
                            token: r,
                            notificationType: n,
                            enableEncrypted: i = !1
                        } = e, s = "".concat("https://echo.walletconnect.com", "/").concat(this.projectId, "/clients");
                        await vi()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: n,
                                token: r,
                                always_raw: i
                            })
                        })
                    }, this.logger = (0, Bt.generateChildLogger)(t, this.context)
                }
            }
            var ya = Object.defineProperty,
                va = Object.getOwnPropertySymbols,
                ma = Object.prototype.hasOwnProperty,
                wa = Object.prototype.propertyIsEnumerable,
                ba = (e, t, r) => t in e ? ya(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                _a = (e, t) => {
                    for (var r in t || (t = {})) ma.call(t, r) && ba(e, r, t[r]);
                    if (va)
                        for (var r of va(t)) wa.call(t, r) && ba(e, r, t[r]);
                    return e
                };
            class Ea extends Kt {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = Js, this.events = new v.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = null === e || void 0 === e ? void 0 : e.projectId, this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || eo, this.customStoragePrefix = null != e && e.customStoragePrefix ? ":".concat(e.customStoragePrefix) : "";
                    const t = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Bt.pino)((0, Bt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || Ys
                    }));
                    this.logger = (0, Bt.generateChildLogger)(t, this.name), this.heartbeat = new Vt.HeartBeat, this.crypto = new ko(this, this.logger, null === e || void 0 === e ? void 0 : e.keychain), this.history = new pa(this, this.logger), this.expirer = new fa(this, this.logger), this.storage = null != e && e.storage ? e.storage : new Ht(_a(_a({}, Qs), null === e || void 0 === e ? void 0 : e.storageOptions)), this.relayer = new na({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new la(this, this.logger), this.verify = new da(this.projectId || "", this.logger), this.echoClient = new ga(this.projectId || "", this.logger)
                }
                static async init(e) {
                    const t = new Ea(e);
                    await t.initialize();
                    const r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), e), this.logger.error(e.message), e
                    }
                }
            }
            const Ia = Ea,
                Sa = "client",
                Oa = "".concat("wc", "@").concat(2, ":").concat(Sa, ":"),
                Pa = Sa,
                Na = "error",
                Aa = "WALLETCONNECT_DEEPLINK_CHOICE",
                Ra = "Proposal expired",
                Ta = rt.SEVEN_DAYS,
                xa = {
                    wc_sessionPropose: {
                        req: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: rt.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: rt.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: rt.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: rt.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                Ca = {
                    min: rt.FIVE_MINUTES,
                    max: rt.SEVEN_DAYS
                },
                Ua = "IDLE",
                ja = "ACTIVE",
                Da = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var La = Object.defineProperty,
                Ma = Object.defineProperties,
                ka = Object.getOwnPropertyDescriptors,
                qa = Object.getOwnPropertySymbols,
                za = Object.prototype.hasOwnProperty,
                Ha = Object.prototype.propertyIsEnumerable,
                Va = (e, t, r) => t in e ? La(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Ba = (e, t) => {
                    for (var r in t || (t = {})) za.call(t, r) && Va(e, r, t[r]);
                    if (qa)
                        for (var r of qa(t)) Ha.call(t, r) && Va(e, r, t[r]);
                    return e
                },
                Fa = (e, t) => Ma(e, ka(t));
            class Ka extends rr {
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(m()), this.initialized = !1, this.ignoredPayloadTypes = [qr], this.requestQueue = {
                        state: Ua,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: Ua,
                        queue: []
                    }, this.requestQueueDelay = rt.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(xa)
                        }), this.initialized = !0, setTimeout((() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }), (0, rt.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        const t = Fa(Ba({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        const {
                            pairingTopic: r,
                            requiredNamespaces: n,
                            optionalNamespaces: i,
                            sessionProperties: s,
                            relays: o
                        } = t;
                        let a, c = r,
                            u = !1;
                        if (c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u) {
                            const {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, a = t
                        }
                        const h = await this.client.core.crypto.generateKeyPair(),
                            l = xa.wc_sessionPropose.req.ttl || rt.FIVE_MINUTES,
                            p = bn(l),
                            f = Ba({
                                requiredNamespaces: n,
                                optionalNamespaces: i,
                                relays: null !== o && void 0 !== o ? o : [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: h,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: p
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: d,
                                resolve: g,
                                done: y
                            } = yn(l, Ra);
                        if (this.events.once(En("session_connect"), (async e => {
                                let {
                                    error: t,
                                    session: r
                                } = e;
                                if (t) d(t);
                                else if (r) {
                                    r.self.publicKey = h;
                                    const e = Fa(Ba({}, r), {
                                        requiredNamespaces: f.requiredNamespaces,
                                        optionalNamespaces: f.optionalNamespaces
                                    });
                                    await this.client.session.set(r.topic, e), await this.setExpiry(r.topic, r.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: r.peer.metadata
                                    }), g(e)
                                }
                            })), !c) {
                            const {
                                message: e
                            } = qn("NO_MATCHING_KEY", "connect() pairing topic: ".concat(c));
                            throw new Error(e)
                        }
                        const v = await this.sendRequest({
                            topic: c,
                            method: "wc_sessionPropose",
                            params: f,
                            throwOnFailedPublish: !0
                        });
                        return await this.setProposal(v, Ba({
                            id: v
                        }, f)), {
                            uri: a,
                            approval: y
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        const {
                            id: t,
                            relayProtocol: r,
                            namespaces: n,
                            sessionProperties: i
                        } = e, s = this.client.proposal.get(t);
                        let {
                            pairingTopic: o,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: u
                        } = s;
                        o = o || "";
                        const h = await this.client.core.crypto.generateKeyPair(),
                            l = a.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(h, l);
                        o && t && (await this.client.core.pairing.updateMetadata({
                            topic: o,
                            metadata: a.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: o,
                            result: {
                                relay: {
                                    protocol: null !== r && void 0 !== r ? r : "irn"
                                },
                                responderPublicKey: h
                            }
                        }), await this.client.proposal.delete(t, zn("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: o
                        }));
                        const f = Ba({
                            relay: {
                                protocol: null !== r && void 0 !== r ? r : "irn"
                            },
                            namespaces: n,
                            pairingTopic: o,
                            controller: {
                                publicKey: h,
                                metadata: this.client.metadata
                            },
                            expiry: bn(Ta)
                        }, i && {
                            sessionProperties: i
                        });
                        await this.client.core.relayer.subscribe(p);
                        const d = Fa(Ba({}, f), {
                            topic: p,
                            requiredNamespaces: c,
                            optionalNamespaces: u,
                            pairingTopic: o,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: h
                        });
                        await this.client.session.set(p, d);
                        try {
                            await this.sendRequest({
                                topic: p,
                                method: "wc_sessionSettle",
                                params: f,
                                throwOnFailedPublish: !0
                            })
                        } catch (g) {
                            throw this.client.logger.error(g), this.client.session.delete(p, zn("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(p), g
                        }
                        return await this.setExpiry(p, bn(Ta)), {
                            topic: p,
                            acknowledged: () => new Promise((e => setTimeout((() => e(this.client.session.get(p))), 500)))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        const {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: n
                        } = this.client.proposal.get(t);
                        n && (await this.sendError(t, n, r), await this.client.proposal.delete(t, zn("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        const {
                            topic: t,
                            namespaces: r
                        } = e, n = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: i,
                            resolve: s,
                            reject: o
                        } = yn();
                        return this.events.once(En("session_update", n), (e => {
                            let {
                                error: t
                            } = e;
                            t ? o(t) : s()
                        })), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: i
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        const {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: n,
                            resolve: i,
                            reject: s
                        } = yn();
                        return this.events.once(En("session_extend", r), (e => {
                            let {
                                error: t
                            } = e;
                            t ? s(t) : i()
                        })), await this.setExpiry(t, bn(Ta)), {
                            acknowledged: n
                        }
                    }, this.request = async t => {
                        await this.isInitialized(), await this.isValidRequest(t);
                        const {
                            chainId: n,
                            request: i,
                            topic: s,
                            expiry: o = xa.wc_sessionRequest.req.ttl
                        } = t, a = (0, ui.payloadId)(), {
                            done: c,
                            resolve: u,
                            reject: h
                        } = yn(o, "Request expired. Please try again.");
                        return this.events.once(En("session_request", a), (e => {
                            let {
                                error: t,
                                result: r
                            } = e;
                            t ? h(t) : u(r)
                        })), await Promise.all([new Promise((async e => {
                            await this.sendRequest({
                                clientRpcId: a,
                                topic: s,
                                method: "wc_sessionRequest",
                                params: {
                                    request: Fa(Ba({}, i), {
                                        expiryTimestamp: bn(o)
                                    }),
                                    chainId: n
                                },
                                expiry: o,
                                throwOnFailedPublish: !0
                            }).catch((e => h(e))), this.client.events.emit("session_request_sent", {
                                topic: s,
                                request: i,
                                chainId: n,
                                id: a
                            }), e()
                        })), new Promise((async t => {
                            const n = await async function(e, t) {
                                try {
                                    return await e.getItem(t) || (un() ? localStorage.getItem(t) : void 0)
                                } catch (i) {
                                    console.error(i)
                                }
                            }(this.client.core.storage, Aa);
                            (async function(t) {
                                let {
                                    id: n,
                                    topic: i,
                                    wcDeepLink: s
                                } = t;
                                try {
                                    if (!s) return;
                                    const e = "string" == typeof s ? JSON.parse(s) : s;
                                    let t = null === e || void 0 === e ? void 0 : e.href;
                                    if ("string" != typeof t) return;
                                    t.endsWith("/") && (t = t.slice(0, -1));
                                    const o = "".concat(t, "/wc?requestId=").concat(n, "&sessionTopic=").concat(i),
                                        a = hn();
                                    a === sn.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === sn.reactNative && typeof(null == r.g ? void 0 : r.g.Linking) < "u" && await r.g.Linking.openURL(o)
                                } catch (e) {
                                    console.error(e)
                                }
                            })({
                                id: a,
                                topic: s,
                                wcDeepLink: n
                            }), t()
                        })), c()]).then((e => e[2]))
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        const {
                            topic: t,
                            response: r
                        } = e, {
                            id: n
                        } = r;
                        (0, ui.isJsonRpcResult)(r) ? await this.sendResult({
                            id: n,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, ui.isJsonRpcError)(r) && await this.sendError(n, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            const e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = yn();
                            this.events.once(En("session_ping", e), (e => {
                                let {
                                    error: t
                                } = e;
                                t ? i(t) : n()
                            })), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        const {
                            topic: t,
                            event: r,
                            chainId: n
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: n
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: zn("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession({
                            topic: t,
                            emitEvent: !1
                        });
                        else {
                            if (!this.client.core.pairing.pairings.keys.includes(t)) {
                                const {
                                    message: e
                                } = qn("MISMATCHED_TOPIC", "Session or pairing topic not found: ".concat(t));
                                throw new Error(e)
                            }
                            await this.client.core.pairing.disconnect({
                                topic: t
                            })
                        }
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => function(e, t) {
                        const {
                            requiredNamespaces: r
                        } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
                        let s = !0;
                        return !!fn(i, n) && (n.forEach((t => {
                            const {
                                accounts: n,
                                methods: i,
                                events: o
                            } = e.namespaces[t], a = Ln(n), c = r[t];
                            (!fn(Ur(t, c), a) || !fn(c.methods, i) || !fn(c.events, o)) && (s = !1)
                        })), s)
                    }(t, e)))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            const t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter((r => {
                                    var n, i;
                                    return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                }));
                            if (0 === r.length) return;
                            this.client.logger.info("Cleaning up ".concat(r.length, " duplicate pairing(s)")), await Promise.all(r.map((e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            })))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    }, this.deleteSession = async e => {
                        const {
                            topic: t,
                            expirerHasDeleted: r = !1,
                            emitEvent: n = !0,
                            id: i = 0
                        } = e, {
                            self: s
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), await this.client.session.delete(t, zn("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), r || this.client.core.expirer.del(t), this.client.core.storage.removeItem(Aa).catch((e => this.client.logger.warn(e))), this.getPendingSessionRequests().forEach((e => {
                            e.topic === t && this.deletePendingSessionRequest(e.id, zn("USER_DISCONNECTED"))
                        })), n && this.client.events.emit("session_delete", {
                            id: i,
                            topic: t
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, zn("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async function(e, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        await Promise.all([t.client.pendingRequest.delete(e, r), n ? Promise.resolve() : t.client.core.expirer.del(e)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter((t => t.id !== e)), n && (t.sessionRequestQueue.state = Ua, t.client.events.emit("session_request_expire", {
                            id: e
                        }))
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, bn(xa.wc_sessionPropose.req.ttl))
                    }, this.setPendingSessionRequest = async e => {
                        const {
                            id: t,
                            topic: r,
                            params: n,
                            verifyContext: i
                        } = e, s = n.request.expiryTimestamp || bn(xa.wc_sessionRequest.req.ttl);
                        await this.client.pendingRequest.set(t, {
                            id: t,
                            topic: r,
                            params: n,
                            verifyContext: i
                        }), s && this.client.core.expirer.set(t, s)
                    }, this.sendRequest = async e => {
                        const {
                            topic: t,
                            method: r,
                            params: n,
                            expiry: i,
                            relayRpcId: s,
                            clientRpcId: o,
                            throwOnFailedPublish: a
                        } = e, c = (0, ui.formatJsonRpcRequest)(r, n, o);
                        if (un() && Da.includes(r)) {
                            const e = Kr(JSON.stringify(c));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        const u = await this.client.core.crypto.encode(t, c),
                            h = xa[r].req;
                        return i && (h.ttl = i), s && (h.id = s), this.client.core.history.set(t, c), a ? (h.internal = Fa(Ba({}, h.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, h)) : this.client.core.relayer.publish(t, u, h).catch((e => this.client.logger.error(e))), c.id
                    }, this.sendResult = async e => {
                        const {
                            id: t,
                            topic: r,
                            result: n,
                            throwOnFailedPublish: i
                        } = e, s = (0, ui.formatJsonRpcResult)(t, n), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, t), c = xa[a.request.method].res;
                        i ? (c.internal = Fa(Ba({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch((e => this.client.logger.error(e))), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        const n = (0, ui.formatJsonRpcError)(e, r),
                            i = await this.client.core.crypto.encode(t, n),
                            s = await this.client.core.history.get(t, e),
                            o = xa[s.request.method].res;
                        this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
                    }, this.cleanup = async () => {
                        const e = [],
                            t = [];
                        this.client.session.getAll().forEach((t => {
                            let r = !1;
                            _n(t.expiry) && (r = !0), this.client.core.crypto.keychain.has(t.topic) || (r = !0), r && e.push(t.topic)
                        })), this.client.proposal.getAll().forEach((e => {
                            _n(e.expiryTimestamp) && t.push(e.id)
                        })), await Promise.all([...e.map((e => this.deleteSession({
                            topic: e
                        }))), ...t.map((e => this.deleteProposal(e)))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state !== ja) {
                            for (this.client.logger.info("Request queue starting with ".concat(this.requestQueue.queue.length, " requests")); this.requestQueue.queue.length > 0;) {
                                this.requestQueue.state = ja;
                                const t = this.requestQueue.queue.shift();
                                if (t) try {
                                    this.processRequest(t), await new Promise((e => setTimeout(e, 300)))
                                } catch (e) {
                                    this.client.logger.warn(e)
                                }
                            }
                            this.requestQueue.state = Ua
                        } else this.client.logger.info("Request queue already active, skipping...")
                    }, this.processRequest = e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = r.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info("Unsupported request method ".concat(n))
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: r
                        } = e, n = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info("Unsupported response method ".concat(n))
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        const {
                            topic: t
                        } = e, {
                            message: r
                        } = qn("MISSING_OR_INVALID", "Decoded payload on topic ".concat(t, " is not identifiable as a JSON-RPC request or a response."));
                        throw new Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        const {
                            params: r,
                            id: n
                        } = t;
                        try {
                            this.isValidConnect(Ba({}, t.params));
                            const i = r.expiryTimestamp || bn(xa.wc_sessionPropose.req.ttl),
                                s = Ba({
                                    id: n,
                                    pairingTopic: e,
                                    expiryTimestamp: i
                                }, r);
                            await this.setProposal(n, s);
                            const o = Kr(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: n,
                                params: s,
                                verifyContext: a
                            })
                        } catch (Kt) {
                            await this.sendError(n, e, Kt), this.client.logger.error(Kt)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        if ((0, ui.isJsonRpcResult)(t)) {
                            const {
                                result: n
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: n
                            });
                            const i = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: i
                            });
                            const s = i.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            const o = n.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, ui.isJsonRpcError)(t) && (await this.client.proposal.delete(r, zn("USER_DISCONNECTED")), this.events.emit(En("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(n);
                            const {
                                relay: r,
                                controller: i,
                                expiry: s,
                                namespaces: o,
                                sessionProperties: a,
                                pairingTopic: c
                            } = t.params, u = Ba({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: c,
                                requiredNamespaces: {},
                                optionalNamespaces: {},
                                controller: i.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: i.publicKey,
                                    metadata: i.metadata
                                }
                            }, a && {
                                sessionProperties: a
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit(En("session_connect"), {
                                session: u
                            }), this.cleanupDuplicatePairings(u)
                        } catch (Kt) {
                            await this.sendError(r, e, Kt), this.client.logger.error(Kt)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, ui.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(En("session_approve", r), {})) : (0, ui.isJsonRpcError)(t) && (await this.client.session.delete(e, zn("USER_DISCONNECTED")), this.events.emit(En("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        const {
                            params: r,
                            id: n
                        } = t;
                        try {
                            const t = "".concat(e, "_session_update"),
                                i = ci.get(t);
                            if (i && this.isRequestOutOfSync(i, n)) return void this.client.logger.info("Discarding out of sync request - ".concat(n));
                            this.isValidUpdate(Ba({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: n,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: n,
                                topic: e,
                                params: r
                            }), ci.set(t, n)
                        } catch (Kt) {
                            await this.sendError(n, e, Kt), this.client.logger.error(Kt)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, ui.isJsonRpcResult)(t) ? this.events.emit(En("session_update", r), {}): (0, ui.isJsonRpcError)(t) && this.events.emit(En("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, bn(Ta)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.client.logger.error(n)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, ui.isJsonRpcResult)(t) ? this.events.emit(En("session_extend", r), {}): (0, ui.isJsonRpcError)(t) && this.events.emit(En("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (n) {
                            await this.sendError(r, e, n), this.client.logger.error(n)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        setTimeout((() => {
                            (0, ui.isJsonRpcResult)(t) ? this.events.emit(En("session_ping", r), {}): (0, ui.isJsonRpcError)(t) && this.events.emit(En("session_ping", r), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        const {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise((t => {
                                this.client.core.relayer.once(co, (async () => {
                                    t(await this.deleteSession({
                                        topic: e,
                                        id: r
                                    }))
                                }))
                            })), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.cleanupPendingSentRequestsForTopic({
                                topic: e,
                                error: zn("USER_DISCONNECTED")
                            })])
                        } catch (n) {
                            this.client.logger.error(n)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidRequest(Ba({
                                topic: e
                            }, n));
                            const t = Kr(JSON.stringify((0, ui.formatJsonRpcRequest)("wc_sessionRequest", n, r))),
                                i = this.client.session.get(e),
                                s = {
                                    id: r,
                                    topic: e,
                                    params: n,
                                    verifyContext: await this.getVerifyContext(t, i.peer.metadata)
                                };
                            await this.setPendingSessionRequest(s), this.addSessionRequestToSessionRequestQueue(s), this.processSessionRequestQueue()
                        } catch (Kt) {
                            await this.sendError(r, e, Kt), this.client.logger.error(Kt)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        const {
                            id: r
                        } = t;
                        (0, ui.isJsonRpcResult)(t) ? this.events.emit(En("session_request", r), {
                            result: t.result
                        }): (0, ui.isJsonRpcError)(t) && this.events.emit(En("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        const {
                            id: r,
                            params: n
                        } = t;
                        try {
                            const t = "".concat(e, "_session_event_").concat(n.event.name),
                                i = ci.get(t);
                            if (i && this.isRequestOutOfSync(i, r)) return void this.client.logger.info("Discarding out of sync request - ".concat(r));
                            this.isValidEmit(Ba({
                                topic: e
                            }, n)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: n
                            }), ci.set(t, r)
                        } catch (Kt) {
                            await this.sendError(r, e, Kt), this.client.logger.error(Kt)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout((() => {
                            this.sessionRequestQueue.state = Ua, this.processSessionRequestQueue()
                        }), (0, rt.toMiliseconds)(this.requestQueueDelay))
                    }, this.cleanupPendingSentRequestsForTopic = e => {
                        let {
                            topic: t,
                            error: r
                        } = e;
                        const n = this.client.core.history.pending;
                        n.length > 0 && n.filter((e => e.topic === t && "wc_sessionRequest" === e.request.method)).forEach((e => {
                            this.events.emit(En("session_request", e.request.id), {
                                error: r
                            })
                        }))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === ja) return void this.client.logger.info("session request queue is already active.");
                        const e = this.sessionRequestQueue.queue[0];
                        if (e) try {
                            this.sessionRequestQueue.state = ja, this.client.events.emit("session_request", e)
                        } catch (t) {
                            this.client.logger.error(t)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        const t = this.client.proposal.getAll().find((t => t.pairingTopic === e.topic));
                        t && this.onSessionProposeRequest(e.topic, (0, ui.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(e)));
                            throw new Error(t)
                        }
                        const {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: n,
                            sessionProperties: i,
                            relays: s
                        } = e;
                        if (Bn(t) || await this.isValidPairingTopic(t), ! function(e, t) {
                                let r = !1;
                                return t && !e ? r = !0 : e && Hn(e) && e.length && e.forEach((e => {
                                    r = Xn(e)
                                })), r
                            }(s, !0)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "connect() relays: ".concat(s));
                            throw new Error(e)
                        }!Bn(r) && 0 !== Vn(r) && this.validateNamespaces(r, "requiredNamespaces"), !Bn(n) && 0 !== Vn(n) && this.validateNamespaces(n, "optionalNamespaces"), Bn(i) || this.validateSessionProps(i, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        const r = function(e, t, r) {
                            let n = null;
                            if (e && Vn(e)) {
                                const i = Qn(e, t);
                                i && (n = i);
                                const s = Gn(e, t, r);
                                s && (n = s)
                            } else n = qn("MISSING_OR_INVALID", "".concat(t, ", ").concat(r, " should be an object with data"));
                            return n
                        }(e, "connect()", t);
                        if (r) throw new Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!Zn(e)) throw new Error(qn("MISSING_OR_INVALID", "approve() params: ".concat(e)).message);
                        const {
                            id: t,
                            namespaces: r,
                            relayProtocol: n,
                            sessionProperties: i
                        } = e;
                        await this.isValidProposalId(t);
                        const s = this.client.proposal.get(t),
                            o = $n(r, "approve()");
                        if (o) throw new Error(o.message);
                        const a = ni(s.requiredNamespaces, r, "approve()");
                        if (a) throw new Error(a.message);
                        if (!Fn(n, !0)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(n));
                            throw new Error(e)
                        }
                        Bn(i) || this.validateSessionProps(i, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "reject() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), ! function(e) {
                                return !(!e || "object" != typeof e || !e.code || !Kn(e.code, !1) || !e.message || !Fn(e.message, !1))
                            }(r)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(r)));
                            throw new Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            relay: t,
                            controller: r,
                            namespaces: n,
                            expiry: i
                        } = e;
                        if (!Xn(t)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(e)
                        }
                        const s = function(e, t) {
                            let r = null;
                            return Fn(null === e || void 0 === e ? void 0 : e.publicKey, !1) || (r = qn("MISSING_OR_INVALID", "".concat(t, " controller public key should be a string"))), r
                        }(r, "onSessionSettleRequest()");
                        if (s) throw new Error(s.message);
                        const o = $n(n, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        if (_n(i)) {
                            const {
                                message: e
                            } = qn("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "update() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        const n = this.client.session.get(t),
                            i = $n(r, "update()");
                        if (i) throw new Error(i.message);
                        const s = ni(n.requiredNamespaces, r, "update()");
                        if (s) throw new Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "extend() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "request() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            request: r,
                            chainId: n,
                            expiry: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!ei(s, n)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "request() chainId: ".concat(n));
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(Bn(e) || !Fn(e.method, !1))
                            }(r)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(r)));
                            throw new Error(e)
                        }
                        if (!ti(s, n, r.method)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "request() method: ".concat(r.method));
                            throw new Error(e)
                        }
                        if (i && ! function(e, t) {
                                return Kn(e, !1) && e <= t.max && e >= t.min
                            }(i, Ca)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "request() expiry: ".concat(i, ". Expiry must be a number (in seconds) between ").concat(Ca.min, " and ").concat(Ca.max));
                            throw new Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "respond() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: r,
                            response: n
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (Kt) {
                            throw null != (t = null === e || void 0 === e ? void 0 : e.response) && t.id && this.cleanupAfterResponse(e), Kt
                        }
                        if (! function(e) {
                                return !(Bn(e) || Bn(e.result) && Bn(e.error) || !Kn(e.id, !1) || !Fn(e.jsonrpc, !1))
                            }(n)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(n)));
                            throw new Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "ping() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "emit() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            event: r,
                            chainId: n
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: i
                        } = this.client.session.get(t);
                        if (!ei(i, n)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "emit() chainId: ".concat(n));
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(Bn(e) || !Fn(e.name, !1))
                            }(r)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                            throw new Error(e)
                        }
                        if (!ri(i, n, r.name)) {
                            const {
                                message: e
                            } = qn("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                            throw new Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!Zn(e)) {
                            const {
                                message: t
                            } = qn("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        const r = {
                            verified: {
                                verifyUrl: t.verifyUrl || jo,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            const n = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            n && (r.verified.origin = n.origin, r.verified.isScam = n.isScam, r.verified.validation = n.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (n) {
                            this.client.logger.info(n)
                        }
                        return this.client.logger.info("Verify context: ".concat(JSON.stringify(r))), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach((e => {
                            if (!Fn(e, !1)) {
                                const {
                                    message: r
                                } = qn("MISSING_OR_INVALID", "".concat(t, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(e)));
                                throw new Error(r)
                            }
                        }))
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = qn("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(ro, (async e => {
                        const {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        const n = await this.client.core.crypto.decode(t, r);
                        try {
                            (0, ui.isJsonRpcRequest)(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : (0, ui.isJsonRpcResponse)(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.client.core.history.delete(t, n.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: n
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(xo, (async e => {
                        const {
                            topic: t,
                            id: r
                        } = wn(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, qn("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                            topic: t,
                            expirerHasDeleted: !0
                        }), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    }))
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(_o, (e => this.onPairingCreated(e)))
                }
                isValidPairingTopic(e) {
                    if (!Fn(e, !1)) {
                        const {
                            message: t
                        } = qn("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                        throw new Error(t)
                    }
                    if (_n(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = qn("EXPIRED", "pairing topic: ".concat(e));
                        throw new Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!Fn(e, !1)) {
                        const {
                            message: t
                        } = qn("MISSING_OR_INVALID", "session topic should be a string: ".concat(e));
                        throw new Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(e));
                        throw new Error(t)
                    }
                    if (_n(this.client.session.get(e).expiry)) {
                        await this.deleteSession({
                            topic: e
                        });
                        const {
                            message: t
                        } = qn("EXPIRED", "session topic: ".concat(e));
                        throw new Error(t)
                    }
                    if (!this.client.core.crypto.keychain.has(e)) {
                        const {
                            message: t
                        } = qn("MISSING_OR_INVALID", "session topic does not exist in keychain: ".concat(e));
                        throw await this.deleteSession({
                            topic: e
                        }), new Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(e)) {
                            if (Fn(e, !1)) {
                                const {
                                    message: t
                                } = qn("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(e));
                                throw new Error(t)
                            } {
                                const {
                                    message: t
                                } = qn("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(e));
                                throw new Error(t)
                            }
                        }
                        this.isValidPairingTopic(e)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        const {
                            message: t
                        } = qn("MISSING_OR_INVALID", "proposal id should be a number: ".concat(e));
                        throw new Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        const {
                            message: t
                        } = qn("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(e));
                        throw new Error(t)
                    }
                    if (_n(this.client.proposal.get(e).expiryTimestamp)) {
                        await this.deleteProposal(e);
                        const {
                            message: t
                        } = qn("EXPIRED", "proposal id: ".concat(e));
                        throw new Error(t)
                    }
                }
            }
            class Wa extends ha {
                constructor(e, t) {
                    super(e, t, "proposal", Oa), this.core = e, this.logger = t
                }
            }
            class Ja extends ha {
                constructor(e, t) {
                    super(e, t, "session", Oa), this.core = e, this.logger = t
                }
            }
            class Ga extends ha {
                constructor(e, t) {
                    super(e, t, "request", Oa, (e => e.id)), this.core = e, this.logger = t
                }
            }
            class Ya extends tr {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = Pa, this.events = new v.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = (null === e || void 0 === e ? void 0 : e.name) || Pa, this.metadata = (null === e || void 0 === e ? void 0 : e.metadata) || (0, xr.g)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    const t = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Bt.pino)((0, Bt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || Na
                    }));
                    this.core = (null === e || void 0 === e ? void 0 : e.core) || new Ia(e), this.logger = (0, Bt.generateChildLogger)(t, this.name), this.session = new Ja(this.core, this.logger), this.proposal = new Wa(this.core, this.logger), this.pendingRequest = new Ga(this.core, this.logger), this.engine = new Ka(this)
                }
                static async init(e) {
                    const t = new Ya(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, Bt.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            r(5037), r(5257);
            const Qa = ":";

            function $a(e) {
                const [t, r] = e.split(Qa);
                return {
                    namespace: t,
                    reference: r
                }
            }
            Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function Xa() {
                return [...new Set([...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []])]
            }
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function Za(e) {
                return e.includes(":")
            }

            function ec(e) {
                return Za(e) ? e.split(":")[0] : e
            }
            const tc = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function rc(e, t) {
                const {
                    message: r,
                    code: n
                } = tc[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: n
                }
            }

            function nc(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }

            function ic(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }
            var sc = r(4734),
                oc = r.n(sc);
            const ac = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class cc {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.url = e, this.disableProviderPing = t, this.events = new v.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, ui.isHttpUrl)(e)) throw new Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        const t = Ut(e),
                            r = await oc()(this.url, Object.assign(Object.assign({}, ac), {
                                body: t
                            })),
                            n = await r.json();
                        this.onPayload({
                            data: n
                        })
                    } catch (r) {
                        this.onError(e.id, r)
                    }
                }
                async register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, ui.isHttpUrl)(e)) throw new Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                    if (this.registering) {
                        const e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                            this.events.once("register_error", (e => {
                                this.resetMaxListeners(), t(e)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
                                e()
                            }))
                        }))
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            const t = Ut({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await oc()(e, Object.assign(Object.assign({}, ac), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        const e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if ("undefined" === typeof e.data) return;
                    const t = "string" === typeof e.data ? Ct(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const r = this.parseError(t),
                        n = r.message || r.toString(),
                        i = (0, ui.formatJsonRpcError)(e, n);
                    this.events.emit("payload", i)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, ui.parseConnectionError)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const uc = cc,
                hc = "error",
                lc = "".concat("wc", "@2:").concat("universal_provider", ":"),
                pc = "default_chain_changed";
            var fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                dc = {
                    exports: {}
                };
            ! function(e, t) {
                (function() {
                    var r, n = "Expected a function",
                        i = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 16,
                        a = 32,
                        c = 64,
                        u = 128,
                        h = 256,
                        l = 1 / 0,
                        p = 9007199254740991,
                        f = NaN,
                        d = 4294967295,
                        g = [
                            ["ary", u],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", o],
                            ["flip", 512],
                            ["partial", a],
                            ["partialRight", c],
                            ["rearg", h]
                        ],
                        y = "[object Arguments]",
                        v = "[object Array]",
                        m = "[object Boolean]",
                        w = "[object Date]",
                        b = "[object Error]",
                        _ = "[object Function]",
                        E = "[object GeneratorFunction]",
                        I = "[object Map]",
                        S = "[object Number]",
                        O = "[object Object]",
                        P = "[object Promise]",
                        N = "[object RegExp]",
                        A = "[object Set]",
                        R = "[object String]",
                        T = "[object Symbol]",
                        x = "[object WeakMap]",
                        C = "[object ArrayBuffer]",
                        U = "[object DataView]",
                        j = "[object Float32Array]",
                        D = "[object Float64Array]",
                        L = "[object Int8Array]",
                        M = "[object Int16Array]",
                        k = "[object Int32Array]",
                        q = "[object Uint8Array]",
                        z = "[object Uint8ClampedArray]",
                        H = "[object Uint16Array]",
                        V = "[object Uint32Array]",
                        B = /\b__p \+= '';/g,
                        F = /\b(__p \+=) '' \+/g,
                        K = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        W = /&(?:amp|lt|gt|quot|#39);/g,
                        J = /[&<>"']/g,
                        G = RegExp(W.source),
                        Y = RegExp(J.source),
                        Q = /<%-([\s\S]+?)%>/g,
                        $ = /<%([\s\S]+?)%>/g,
                        X = /<%=([\s\S]+?)%>/g,
                        Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        ee = /^\w*$/,
                        te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        re = /[\\^$.*+?()[\]{}|]/g,
                        ne = RegExp(re.source),
                        ie = /^\s+/,
                        se = /\s/,
                        oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ce = /,? & /,
                        ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        he = /[()=,{}\[\]\/\s]/,
                        le = /\\(\\)?/g,
                        pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        fe = /\w*$/,
                        de = /^[-+]0x[0-9a-f]+$/i,
                        ge = /^0b[01]+$/i,
                        ye = /^\[object .+?Constructor\]$/,
                        ve = /^0o[0-7]+$/i,
                        me = /^(?:0|[1-9]\d*)$/,
                        we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        be = /($^)/,
                        _e = /['\n\r\u2028\u2029\\]/g,
                        Ee = "\\ud800-\\udfff",
                        Ie = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Se = "\\u2700-\\u27bf",
                        Oe = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Pe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        Ne = "\\ufe0e\\ufe0f",
                        Ae = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Re = "['\u2019]",
                        Te = "[" + Ee + "]",
                        xe = "[" + Ae + "]",
                        Ce = "[" + Ie + "]",
                        Ue = "\\d+",
                        je = "[" + Se + "]",
                        De = "[" + Oe + "]",
                        Le = "[^" + Ee + Ae + Ue + Se + Oe + Pe + "]",
                        Me = "\\ud83c[\\udffb-\\udfff]",
                        ke = "[^" + Ee + "]",
                        qe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        ze = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        He = "[" + Pe + "]",
                        Ve = "\\u200d",
                        Be = "(?:" + De + "|" + Le + ")",
                        Fe = "(?:" + He + "|" + Le + ")",
                        Ke = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        We = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Je = "(?:" + Ce + "|" + Me + ")" + "?",
                        Ge = "[" + Ne + "]?",
                        Ye = Ge + Je + ("(?:" + Ve + "(?:" + [ke, qe, ze].join("|") + ")" + Ge + Je + ")*"),
                        Qe = "(?:" + [je, qe, ze].join("|") + ")" + Ye,
                        $e = "(?:" + [ke + Ce + "?", Ce, qe, ze, Te].join("|") + ")",
                        Xe = RegExp(Re, "g"),
                        Ze = RegExp(Ce, "g"),
                        et = RegExp(Me + "(?=" + Me + ")|" + $e + Ye, "g"),
                        tt = RegExp([He + "?" + De + "+" + Ke + "(?=" + [xe, He, "$"].join("|") + ")", Fe + "+" + We + "(?=" + [xe, He + Be, "$"].join("|") + ")", He + "?" + Be + "+" + Ke, He + "+" + We, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ue, Qe].join("|"), "g"),
                        rt = RegExp("[" + Ve + Ee + Ie + Ne + "]"),
                        nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        it = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        st = -1,
                        ot = {};
                    ot[j] = ot[D] = ot[L] = ot[M] = ot[k] = ot[q] = ot[z] = ot[H] = ot[V] = !0, ot[y] = ot[v] = ot[C] = ot[m] = ot[U] = ot[w] = ot[b] = ot[_] = ot[I] = ot[S] = ot[O] = ot[N] = ot[A] = ot[R] = ot[x] = !1;
                    var at = {};
                    at[y] = at[v] = at[C] = at[U] = at[m] = at[w] = at[j] = at[D] = at[L] = at[M] = at[k] = at[I] = at[S] = at[O] = at[N] = at[A] = at[R] = at[T] = at[q] = at[z] = at[H] = at[V] = !0, at[b] = at[_] = at[x] = !1;
                    var ct = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        ut = parseFloat,
                        ht = parseInt,
                        lt = "object" == typeof fc && fc && fc.Object === Object && fc,
                        pt = "object" == typeof self && self && self.Object === Object && self,
                        ft = lt || pt || Function("return this")(),
                        dt = t && !t.nodeType && t,
                        gt = dt && e && !e.nodeType && e,
                        yt = gt && gt.exports === dt,
                        vt = yt && lt.process,
                        mt = function() {
                            try {
                                return gt && gt.require && gt.require("util").types || vt && vt.binding && vt.binding("util")
                            } catch {}
                        }(),
                        wt = mt && mt.isArrayBuffer,
                        bt = mt && mt.isDate,
                        _t = mt && mt.isMap,
                        Et = mt && mt.isRegExp,
                        It = mt && mt.isSet,
                        St = mt && mt.isTypedArray;

                    function Ot(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function Pt(e, t, r, n) {
                        for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
                            var o = e[i];
                            t(n, o, r(o), e)
                        }
                        return n
                    }

                    function Nt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                        return e
                    }

                    function At(e, t) {
                        for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                        return e
                    }

                    function Rt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function Tt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }

                    function xt(e, t) {
                        return !!(null == e ? 0 : e.length) && Ht(e, t, 0) > -1
                    }

                    function Ct(e, t, r) {
                        for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                            if (r(t, e[n])) return !0;
                        return !1
                    }

                    function Ut(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                        return i
                    }

                    function jt(e, t) {
                        for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                        return e
                    }

                    function Dt(e, t, r, n) {
                        var i = -1,
                            s = null == e ? 0 : e.length;
                        for (n && s && (r = e[++i]); ++i < s;) r = t(r, e[i], i, e);
                        return r
                    }

                    function Lt(e, t, r, n) {
                        var i = null == e ? 0 : e.length;
                        for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
                        return r
                    }

                    function Mt(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var kt = Kt("length");

                    function qt(e, t, r) {
                        var n;
                        return r(e, (function(e, r, i) {
                            if (t(e, r, i)) return n = r, !1
                        })), n
                    }

                    function zt(e, t, r, n) {
                        for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function Ht(e, t, r) {
                        return t === t ? function(e, t, r) {
                            for (var n = r - 1, i = e.length; ++n < i;)
                                if (e[n] === t) return n;
                            return -1
                        }(e, t, r) : zt(e, Bt, r)
                    }

                    function Vt(e, t, r, n) {
                        for (var i = r - 1, s = e.length; ++i < s;)
                            if (n(e[i], t)) return i;
                        return -1
                    }

                    function Bt(e) {
                        return e !== e
                    }

                    function Ft(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? Gt(e, t) / r : f
                    }

                    function Kt(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function Wt(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function Jt(e, t, r, n, i) {
                        return i(e, (function(e, i, s) {
                            r = n ? (n = !1, e) : t(r, e, i, s)
                        })), r
                    }

                    function Gt(e, t) {
                        for (var n, i = -1, s = e.length; ++i < s;) {
                            var o = t(e[i]);
                            o !== r && (n = n === r ? o : n + o)
                        }
                        return n
                    }

                    function Yt(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }

                    function Qt(e) {
                        return e && e.slice(0, pr(e) + 1).replace(ie, "")
                    }

                    function $t(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function Xt(e, t) {
                        return Ut(t, (function(t) {
                            return e[t]
                        }))
                    }

                    function Zt(e, t) {
                        return e.has(t)
                    }

                    function er(e, t) {
                        for (var r = -1, n = e.length; ++r < n && Ht(t, e[r], 0) > -1;);
                        return r
                    }

                    function tr(e, t) {
                        for (var r = e.length; r-- && Ht(t, e[r], 0) > -1;);
                        return r
                    }
                    var rr = Wt({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        nr = Wt({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function ir(e) {
                        return "\\" + ct[e]
                    }

                    function sr(e) {
                        return rt.test(e)
                    }

                    function or(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach((function(e, n) {
                            r[++t] = [n, e]
                        })), r
                    }

                    function ar(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function cr(e, t) {
                        for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[i++] = r)
                        }
                        return o
                    }

                    function ur(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach((function(e) {
                            r[++t] = e
                        })), r
                    }

                    function hr(e) {
                        return sr(e) ? function(e) {
                            for (var t = et.lastIndex = 0; et.test(e);) ++t;
                            return t
                        }(e) : kt(e)
                    }

                    function lr(e) {
                        return sr(e) ? function(e) {
                            return e.match(et) || []
                        }(e) : function(e) {
                            return e.split("")
                        }(e)
                    }

                    function pr(e) {
                        for (var t = e.length; t-- && se.test(e.charAt(t)););
                        return t
                    }
                    var fr = Wt({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var dr = function e(t) {
                        var se = (t = null == t ? ft : dr.defaults(ft.Object(), t, dr.pick(ft, it))).Array,
                            Ee = t.Date,
                            Ie = t.Error,
                            Se = t.Function,
                            Oe = t.Math,
                            Pe = t.Object,
                            Ne = t.RegExp,
                            Ae = t.String,
                            Re = t.TypeError,
                            Te = se.prototype,
                            xe = Se.prototype,
                            Ce = Pe.prototype,
                            Ue = t["__core-js_shared__"],
                            je = xe.toString,
                            De = Ce.hasOwnProperty,
                            Le = 0,
                            Me = function() {
                                var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            ke = Ce.toString,
                            qe = je.call(Pe),
                            ze = ft._,
                            He = Ne("^" + je.call(De).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ve = yt ? t.Buffer : r,
                            Be = t.Symbol,
                            Fe = t.Uint8Array,
                            Ke = Ve ? Ve.allocUnsafe : r,
                            We = ar(Pe.getPrototypeOf, Pe),
                            Je = Pe.create,
                            Ge = Ce.propertyIsEnumerable,
                            Ye = Te.splice,
                            Qe = Be ? Be.isConcatSpreadable : r,
                            $e = Be ? Be.iterator : r,
                            et = Be ? Be.toStringTag : r,
                            rt = function() {
                                try {
                                    var e = hs(Pe, "defineProperty");
                                    return e({}, "", {}), e
                                } catch {}
                            }(),
                            ct = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                            lt = Ee && Ee.now !== ft.Date.now && Ee.now,
                            pt = t.setTimeout !== ft.setTimeout && t.setTimeout,
                            dt = Oe.ceil,
                            gt = Oe.floor,
                            vt = Pe.getOwnPropertySymbols,
                            mt = Ve ? Ve.isBuffer : r,
                            kt = t.isFinite,
                            Wt = Te.join,
                            gr = ar(Pe.keys, Pe),
                            yr = Oe.max,
                            vr = Oe.min,
                            mr = Ee.now,
                            wr = t.parseInt,
                            br = Oe.random,
                            _r = Te.reverse,
                            Er = hs(t, "DataView"),
                            Ir = hs(t, "Map"),
                            Sr = hs(t, "Promise"),
                            Or = hs(t, "Set"),
                            Pr = hs(t, "WeakMap"),
                            Nr = hs(Pe, "create"),
                            Ar = Pr && new Pr,
                            Rr = {},
                            Tr = Ls(Er),
                            xr = Ls(Ir),
                            Cr = Ls(Sr),
                            Ur = Ls(Or),
                            jr = Ls(Pr),
                            Dr = Be ? Be.prototype : r,
                            Lr = Dr ? Dr.valueOf : r,
                            Mr = Dr ? Dr.toString : r;

                        function kr(e) {
                            if (ea(e) && !Bo(e) && !(e instanceof Vr)) {
                                if (e instanceof Hr) return e;
                                if (De.call(e, "__wrapped__")) return Ms(e)
                            }
                            return new Hr(e)
                        }
                        var qr = function() {
                            function e() {}
                            return function(t) {
                                if (!Zo(t)) return {};
                                if (Je) return Je(t);
                                e.prototype = t;
                                var n = new e;
                                return e.prototype = r, n
                            }
                        }();

                        function zr() {}

                        function Hr(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                        }

                        function Vr(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Br(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Fr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Kr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.clear(); ++t < r;) {
                                var n = e[t];
                                this.set(n[0], n[1])
                            }
                        }

                        function Wr(e) {
                            var t = -1,
                                r = null == e ? 0 : e.length;
                            for (this.__data__ = new Kr; ++t < r;) this.add(e[t])
                        }

                        function Jr(e) {
                            var t = this.__data__ = new Fr(e);
                            this.size = t.size
                        }

                        function Gr(e, t) {
                            var r = Bo(e),
                                n = !r && Vo(e),
                                i = !r && !n && Jo(e),
                                s = !r && !n && !i && ca(e),
                                o = r || n || i || s,
                                a = o ? Yt(e.length, Ae) : [],
                                c = a.length;
                            for (var u in e)(t || De.call(e, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || vs(u, c))) && a.push(u);
                            return a
                        }

                        function Yr(e) {
                            var t = e.length;
                            return t ? e[Jn(0, t - 1)] : r
                        }

                        function Qr(e, t) {
                            return Us(Ai(e), on(t, 0, e.length))
                        }

                        function $r(e) {
                            return Us(Ai(e))
                        }

                        function Xr(e, t, n) {
                            (n !== r && !qo(e[t], n) || n === r && !(t in e)) && nn(e, t, n)
                        }

                        function Zr(e, t, n) {
                            var i = e[t];
                            (!De.call(e, t) || !qo(i, n) || n === r && !(t in e)) && nn(e, t, n)
                        }

                        function en(e, t) {
                            for (var r = e.length; r--;)
                                if (qo(e[r][0], t)) return r;
                            return -1
                        }

                        function tn(e, t, r, n) {
                            return ln(e, (function(e, i, s) {
                                t(n, e, r(e), s)
                            })), n
                        }

                        function rn(e, t) {
                            return e && Ri(t, Ta(t), e)
                        }

                        function nn(e, t, r) {
                            "__proto__" == t && rt ? rt(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : e[t] = r
                        }

                        function sn(e, t) {
                            for (var n = -1, i = t.length, s = se(i), o = null == e; ++n < i;) s[n] = o ? r : Oa(e, t[n]);
                            return s
                        }

                        function on(e, t, n) {
                            return e === e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e
                        }

                        function an(e, t, n, i, s, o) {
                            var a, c = 1 & t,
                                u = 2 & t,
                                h = 4 & t;
                            if (n && (a = s ? n(e, i, s, o) : n(e)), a !== r) return a;
                            if (!Zo(e)) return e;
                            var l = Bo(e);
                            if (l) {
                                if (a = function(e) {
                                        var t = e.length,
                                            r = new e.constructor(t);
                                        return t && "string" == typeof e[0] && De.call(e, "index") && (r.index = e.index, r.input = e.input), r
                                    }(e), !c) return Ai(e, a)
                            } else {
                                var p = fs(e),
                                    f = p == _ || p == E;
                                if (Jo(e)) return Ei(e, c);
                                if (p == O || p == y || f && !s) {
                                    if (a = u || f ? {} : gs(e), !c) return u ? function(e, t) {
                                        return Ri(e, ps(e), t)
                                    }(e, function(e, t) {
                                        return e && Ri(t, xa(t), e)
                                    }(a, e)) : function(e, t) {
                                        return Ri(e, ls(e), t)
                                    }(e, rn(a, e))
                                } else {
                                    if (!at[p]) return s ? e : {};
                                    a = function(e, t, r) {
                                        var n = e.constructor;
                                        switch (t) {
                                            case C:
                                                return Ii(e);
                                            case m:
                                            case w:
                                                return new n(+e);
                                            case U:
                                                return function(e, t) {
                                                    var r = t ? Ii(e.buffer) : e.buffer;
                                                    return new e.constructor(r, e.byteOffset, e.byteLength)
                                                }(e, r);
                                            case j:
                                            case D:
                                            case L:
                                            case M:
                                            case k:
                                            case q:
                                            case z:
                                            case H:
                                            case V:
                                                return Si(e, r);
                                            case I:
                                                return new n;
                                            case S:
                                            case R:
                                                return new n(e);
                                            case N:
                                                return function(e) {
                                                    var t = new e.constructor(e.source, fe.exec(e));
                                                    return t.lastIndex = e.lastIndex, t
                                                }(e);
                                            case A:
                                                return new n;
                                            case T:
                                                return function(e) {
                                                    return Lr ? Pe(Lr.call(e)) : {}
                                                }(e)
                                        }
                                    }(e, p, c)
                                }
                            }
                            o || (o = new Jr);
                            var d = o.get(e);
                            if (d) return d;
                            o.set(e, a), sa(e) ? e.forEach((function(r) {
                                a.add(an(r, t, n, r, e, o))
                            })) : ta(e) && e.forEach((function(r, i) {
                                a.set(i, an(r, t, n, i, e, o))
                            }));
                            var g = l ? r : (h ? u ? ns : rs : u ? xa : Ta)(e);
                            return Nt(g || e, (function(r, i) {
                                g && (r = e[i = r]), Zr(a, i, an(r, t, n, i, e, o))
                            })), a
                        }

                        function cn(e, t, n) {
                            var i = n.length;
                            if (null == e) return !i;
                            for (e = Pe(e); i--;) {
                                var s = n[i],
                                    o = t[s],
                                    a = e[s];
                                if (a === r && !(s in e) || !o(a)) return !1
                            }
                            return !0
                        }

                        function un(e, t, i) {
                            if ("function" != typeof e) throw new Re(n);
                            return Rs((function() {
                                e.apply(r, i)
                            }), t)
                        }

                        function hn(e, t, r, n) {
                            var i = -1,
                                s = xt,
                                o = !0,
                                a = e.length,
                                c = [],
                                u = t.length;
                            if (!a) return c;
                            r && (t = Ut(t, $t(r))), n ? (s = Ct, o = !1) : t.length >= 200 && (s = Zt, o = !1, t = new Wr(t));
                            e: for (; ++i < a;) {
                                var h = e[i],
                                    l = null == r ? h : r(h);
                                if (h = n || 0 !== h ? h : 0, o && l === l) {
                                    for (var p = u; p--;)
                                        if (t[p] === l) continue e;
                                    c.push(h)
                                } else s(t, l, n) || c.push(h)
                            }
                            return c
                        }
                        kr.templateSettings = {
                            escape: Q,
                            evaluate: $,
                            interpolate: X,
                            variable: "",
                            imports: {
                                _: kr
                            }
                        }, kr.prototype = zr.prototype, kr.prototype.constructor = kr, Hr.prototype = qr(zr.prototype), Hr.prototype.constructor = Hr, Vr.prototype = qr(zr.prototype), Vr.prototype.constructor = Vr, Br.prototype.clear = function() {
                            this.__data__ = Nr ? Nr(null) : {}, this.size = 0
                        }, Br.prototype.delete = function(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }, Br.prototype.get = function(e) {
                            var t = this.__data__;
                            if (Nr) {
                                var n = t[e];
                                return n === i ? r : n
                            }
                            return De.call(t, e) ? t[e] : r
                        }, Br.prototype.has = function(e) {
                            var t = this.__data__;
                            return Nr ? t[e] !== r : De.call(t, e)
                        }, Br.prototype.set = function(e, t) {
                            var n = this.__data__;
                            return this.size += this.has(e) ? 0 : 1, n[e] = Nr && t === r ? i : t, this
                        }, Fr.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Fr.prototype.delete = function(e) {
                            var t = this.__data__,
                                r = en(t, e);
                            return !(r < 0) && (r == t.length - 1 ? t.pop() : Ye.call(t, r, 1), --this.size, !0)
                        }, Fr.prototype.get = function(e) {
                            var t = this.__data__,
                                n = en(t, e);
                            return n < 0 ? r : t[n][1]
                        }, Fr.prototype.has = function(e) {
                            return en(this.__data__, e) > -1
                        }, Fr.prototype.set = function(e, t) {
                            var r = this.__data__,
                                n = en(r, e);
                            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                        }, Kr.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Br,
                                map: new(Ir || Fr),
                                string: new Br
                            }
                        }, Kr.prototype.delete = function(e) {
                            var t = cs(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }, Kr.prototype.get = function(e) {
                            return cs(this, e).get(e)
                        }, Kr.prototype.has = function(e) {
                            return cs(this, e).has(e)
                        }, Kr.prototype.set = function(e, t) {
                            var r = cs(this, e),
                                n = r.size;
                            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                        }, Wr.prototype.add = Wr.prototype.push = function(e) {
                            return this.__data__.set(e, i), this
                        }, Wr.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Jr.prototype.clear = function() {
                            this.__data__ = new Fr, this.size = 0
                        }, Jr.prototype.delete = function(e) {
                            var t = this.__data__,
                                r = t.delete(e);
                            return this.size = t.size, r
                        }, Jr.prototype.get = function(e) {
                            return this.__data__.get(e)
                        }, Jr.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Jr.prototype.set = function(e, t) {
                            var r = this.__data__;
                            if (r instanceof Fr) {
                                var n = r.__data__;
                                if (!Ir || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                                r = this.__data__ = new Kr(n)
                            }
                            return r.set(e, t), this.size = r.size, this
                        };
                        var ln = Ci(wn),
                            pn = Ci(bn, !0);

                        function fn(e, t) {
                            var r = !0;
                            return ln(e, (function(e, n, i) {
                                return r = !!t(e, n, i)
                            })), r
                        }

                        function dn(e, t, n) {
                            for (var i = -1, s = e.length; ++i < s;) {
                                var o = e[i],
                                    a = t(o);
                                if (null != a && (c === r ? a === a && !aa(a) : n(a, c))) var c = a,
                                    u = o
                            }
                            return u
                        }

                        function gn(e, t) {
                            var r = [];
                            return ln(e, (function(e, n, i) {
                                t(e, n, i) && r.push(e)
                            })), r
                        }

                        function yn(e, t, r, n, i) {
                            var s = -1,
                                o = e.length;
                            for (r || (r = ys), i || (i = []); ++s < o;) {
                                var a = e[s];
                                t > 0 && r(a) ? t > 1 ? yn(a, t - 1, r, n, i) : jt(i, a) : n || (i[i.length] = a)
                            }
                            return i
                        }
                        var vn = Ui(),
                            mn = Ui(!0);

                        function wn(e, t) {
                            return e && vn(e, t, Ta)
                        }

                        function bn(e, t) {
                            return e && mn(e, t, Ta)
                        }

                        function _n(e, t) {
                            return Tt(t, (function(t) {
                                return Qo(e[t])
                            }))
                        }

                        function En(e, t) {
                            for (var n = 0, i = (t = mi(t, e)).length; null != e && n < i;) e = e[Ds(t[n++])];
                            return n && n == i ? e : r
                        }

                        function In(e, t, r) {
                            var n = t(e);
                            return Bo(e) ? n : jt(n, r(e))
                        }

                        function Sn(e) {
                            return null == e ? e === r ? "[object Undefined]" : "[object Null]" : et && et in Pe(e) ? function(e) {
                                var t = De.call(e, et),
                                    n = e[et];
                                try {
                                    e[et] = r;
                                    var i = !0
                                } catch {}
                                var s = ke.call(e);
                                return i && (t ? e[et] = n : delete e[et]), s
                            }(e) : function(e) {
                                return ke.call(e)
                            }(e)
                        }

                        function On(e, t) {
                            return e > t
                        }

                        function Pn(e, t) {
                            return null != e && De.call(e, t)
                        }

                        function Nn(e, t) {
                            return null != e && t in Pe(e)
                        }

                        function An(e, t, n) {
                            for (var i = n ? Ct : xt, s = e[0].length, o = e.length, a = o, c = se(o), u = 1 / 0, h = []; a--;) {
                                var l = e[a];
                                a && t && (l = Ut(l, $t(t))), u = vr(l.length, u), c[a] = !n && (t || s >= 120 && l.length >= 120) ? new Wr(a && l) : r
                            }
                            l = e[0];
                            var p = -1,
                                f = c[0];
                            e: for (; ++p < s && h.length < u;) {
                                var d = l[p],
                                    g = t ? t(d) : d;
                                if (d = n || 0 !== d ? d : 0, !(f ? Zt(f, g) : i(h, g, n))) {
                                    for (a = o; --a;) {
                                        var y = c[a];
                                        if (!(y ? Zt(y, g) : i(e[a], g, n))) continue e
                                    }
                                    f && f.push(g), h.push(d)
                                }
                            }
                            return h
                        }

                        function Rn(e, t, n) {
                            var i = null == (e = Ps(e, t = mi(t, e))) ? e : e[Ds(Gs(t))];
                            return null == i ? r : Ot(i, e, n)
                        }

                        function Tn(e) {
                            return ea(e) && Sn(e) == y
                        }

                        function xn(e, t, n, i, s) {
                            return e === t || (null == e || null == t || !ea(e) && !ea(t) ? e !== e && t !== t : function(e, t, n, i, s, o) {
                                var a = Bo(e),
                                    c = Bo(t),
                                    u = a ? v : fs(e),
                                    h = c ? v : fs(t);
                                u = u == y ? O : u;
                                var l = u == O,
                                    p = (h = h == y ? O : h) == O,
                                    f = u == h;
                                if (f && Jo(e)) {
                                    if (!Jo(t)) return !1;
                                    a = !0, l = !1
                                }
                                if (f && !l) return o || (o = new Jr), a || ca(e) ? es(e, t, n, i, s, o) : function(e, t, r, n, i, s, o) {
                                    switch (r) {
                                        case U:
                                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                            e = e.buffer, t = t.buffer;
                                        case C:
                                            return !(e.byteLength != t.byteLength || !s(new Fe(e), new Fe(t)));
                                        case m:
                                        case w:
                                        case S:
                                            return qo(+e, +t);
                                        case b:
                                            return e.name == t.name && e.message == t.message;
                                        case N:
                                        case R:
                                            return e == t + "";
                                        case I:
                                            var a = or;
                                        case A:
                                            var c = 1 & n;
                                            if (a || (a = ur), e.size != t.size && !c) return !1;
                                            var u = o.get(e);
                                            if (u) return u == t;
                                            n |= 2, o.set(e, t);
                                            var h = es(a(e), a(t), n, i, s, o);
                                            return o.delete(e), h;
                                        case T:
                                            if (Lr) return Lr.call(e) == Lr.call(t)
                                    }
                                    return !1
                                }(e, t, u, n, i, s, o);
                                if (!(1 & n)) {
                                    var d = l && De.call(e, "__wrapped__"),
                                        g = p && De.call(t, "__wrapped__");
                                    if (d || g) {
                                        var _ = d ? e.value() : e,
                                            E = g ? t.value() : t;
                                        return o || (o = new Jr), s(_, E, n, i, o)
                                    }
                                }
                                return !!f && (o || (o = new Jr), function(e, t, n, i, s, o) {
                                    var a = 1 & n,
                                        c = rs(e),
                                        u = c.length,
                                        h = rs(t),
                                        l = h.length;
                                    if (u != l && !a) return !1;
                                    for (var p = u; p--;) {
                                        var f = c[p];
                                        if (!(a ? f in t : De.call(t, f))) return !1
                                    }
                                    var d = o.get(e),
                                        g = o.get(t);
                                    if (d && g) return d == t && g == e;
                                    var y = !0;
                                    o.set(e, t), o.set(t, e);
                                    for (var v = a; ++p < u;) {
                                        var m = e[f = c[p]],
                                            w = t[f];
                                        if (i) var b = a ? i(w, m, f, t, e, o) : i(m, w, f, e, t, o);
                                        if (!(b === r ? m === w || s(m, w, n, i, o) : b)) {
                                            y = !1;
                                            break
                                        }
                                        v || (v = "constructor" == f)
                                    }
                                    if (y && !v) {
                                        var _ = e.constructor,
                                            E = t.constructor;
                                        _ != E && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof E && E instanceof E) && (y = !1)
                                    }
                                    return o.delete(e), o.delete(t), y
                                }(e, t, n, i, s, o))
                            }(e, t, n, i, xn, s))
                        }

                        function Cn(e, t, n, i) {
                            var s = n.length,
                                o = s,
                                a = !i;
                            if (null == e) return !o;
                            for (e = Pe(e); s--;) {
                                var c = n[s];
                                if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                            }
                            for (; ++s < o;) {
                                var u = (c = n[s])[0],
                                    h = e[u],
                                    l = c[1];
                                if (a && c[2]) {
                                    if (h === r && !(u in e)) return !1
                                } else {
                                    var p = new Jr;
                                    if (i) var f = i(h, l, u, e, t, p);
                                    if (!(f === r ? xn(l, h, 3, i, p) : f)) return !1
                                }
                            }
                            return !0
                        }

                        function Un(e) {
                            return !(!Zo(e) || function(e) {
                                return !!Me && Me in e
                            }(e)) && (Qo(e) ? He : ye).test(Ls(e))
                        }

                        function jn(e) {
                            return "function" == typeof e ? e : null == e ? rc : "object" == typeof e ? Bo(e) ? zn(e[0], e[1]) : qn(e) : lc(e)
                        }

                        function Dn(e) {
                            if (!Es(e)) return gr(e);
                            var t = [];
                            for (var r in Pe(e)) De.call(e, r) && "constructor" != r && t.push(r);
                            return t
                        }

                        function Ln(e) {
                            if (!Zo(e)) return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var r in Pe(e)) t.push(r);
                                return t
                            }(e);
                            var t = Es(e),
                                r = [];
                            for (var n in e) "constructor" == n && (t || !De.call(e, n)) || r.push(n);
                            return r
                        }

                        function Mn(e, t) {
                            return e < t
                        }

                        function kn(e, t) {
                            var r = -1,
                                n = Ko(e) ? se(e.length) : [];
                            return ln(e, (function(e, i, s) {
                                n[++r] = t(e, i, s)
                            })), n
                        }

                        function qn(e) {
                            var t = us(e);
                            return 1 == t.length && t[0][2] ? Ss(t[0][0], t[0][1]) : function(r) {
                                return r === e || Cn(r, e, t)
                            }
                        }

                        function zn(e, t) {
                            return ws(e) && Is(t) ? Ss(Ds(e), t) : function(n) {
                                var i = Oa(n, e);
                                return i === r && i === t ? Pa(n, e) : xn(t, i, 3)
                            }
                        }

                        function Hn(e, t, n, i, s) {
                            e !== t && vn(t, (function(o, a) {
                                if (s || (s = new Jr), Zo(o)) ! function(e, t, n, i, s, o, a) {
                                    var c = Ns(e, n),
                                        u = Ns(t, n),
                                        h = a.get(u);
                                    if (h) return void Xr(e, n, h);
                                    var l = o ? o(c, u, n + "", e, t, a) : r,
                                        p = l === r;
                                    if (p) {
                                        var f = Bo(u),
                                            d = !f && Jo(u),
                                            g = !f && !d && ca(u);
                                        l = u, f || d || g ? Bo(c) ? l = c : Wo(c) ? l = Ai(c) : d ? (p = !1, l = Ei(u, !0)) : g ? (p = !1, l = Si(u, !0)) : l = [] : na(u) || Vo(u) ? (l = c, Vo(c) ? l = ya(c) : (!Zo(c) || Qo(c)) && (l = gs(u))) : p = !1
                                    }
                                    p && (a.set(u, l), s(l, u, i, o, a), a.delete(u)), Xr(e, n, l)
                                }(e, t, a, n, Hn, i, s);
                                else {
                                    var c = i ? i(Ns(e, a), o, a + "", e, t, s) : r;
                                    c === r && (c = o), Xr(e, a, c)
                                }
                            }), xa)
                        }

                        function Vn(e, t) {
                            var n = e.length;
                            if (n) return vs(t += t < 0 ? n : 0, n) ? e[t] : r
                        }

                        function Bn(e, t, r) {
                            t = t.length ? Ut(t, (function(e) {
                                return Bo(e) ? function(t) {
                                    return En(t, 1 === e.length ? e[0] : e)
                                } : e
                            })) : [rc];
                            var n = -1;
                            return t = Ut(t, $t(as())),
                                function(e, t) {
                                    var r = e.length;
                                    for (e.sort(t); r--;) e[r] = e[r].value;
                                    return e
                                }(kn(e, (function(e, r, i) {
                                    return {
                                        criteria: Ut(t, (function(t) {
                                            return t(e)
                                        })),
                                        index: ++n,
                                        value: e
                                    }
                                })), (function(e, t) {
                                    return function(e, t, r) {
                                        for (var n = -1, i = e.criteria, s = t.criteria, o = i.length, a = r.length; ++n < o;) {
                                            var c = Oi(i[n], s[n]);
                                            if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1)
                                        }
                                        return e.index - t.index
                                    }(e, t, r)
                                }))
                        }

                        function Fn(e, t, r) {
                            for (var n = -1, i = t.length, s = {}; ++n < i;) {
                                var o = t[n],
                                    a = En(e, o);
                                r(a, o) && Xn(s, mi(o, e), a)
                            }
                            return s
                        }

                        function Kn(e, t, r, n) {
                            var i = n ? Vt : Ht,
                                s = -1,
                                o = t.length,
                                a = e;
                            for (e === t && (t = Ai(t)), r && (a = Ut(e, $t(r))); ++s < o;)
                                for (var c = 0, u = t[s], h = r ? r(u) : u;
                                    (c = i(a, h, c, n)) > -1;) a !== e && Ye.call(a, c, 1), Ye.call(e, c, 1);
                            return e
                        }

                        function Wn(e, t) {
                            for (var r = e ? t.length : 0, n = r - 1; r--;) {
                                var i = t[r];
                                if (r == n || i !== s) {
                                    var s = i;
                                    vs(i) ? Ye.call(e, i, 1) : hi(e, i)
                                }
                            }
                            return e
                        }

                        function Jn(e, t) {
                            return e + gt(br() * (t - e + 1))
                        }

                        function Gn(e, t) {
                            var r = "";
                            if (!e || t < 1 || t > p) return r;
                            do {
                                t % 2 && (r += e), (t = gt(t / 2)) && (e += e)
                            } while (t);
                            return r
                        }

                        function Yn(e, t) {
                            return Ts(Os(e, t, rc), e + "")
                        }

                        function Qn(e) {
                            return Yr(qa(e))
                        }

                        function $n(e, t) {
                            var r = qa(e);
                            return Us(r, on(t, 0, r.length))
                        }

                        function Xn(e, t, n, i) {
                            if (!Zo(e)) return e;
                            for (var s = -1, o = (t = mi(t, e)).length, a = o - 1, c = e; null != c && ++s < o;) {
                                var u = Ds(t[s]),
                                    h = n;
                                if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
                                if (s != a) {
                                    var l = c[u];
                                    (h = i ? i(l, u, c) : r) === r && (h = Zo(l) ? l : vs(t[s + 1]) ? [] : {})
                                }
                                Zr(c, u, h), c = c[u]
                            }
                            return e
                        }
                        var Zn = Ar ? function(e, t) {
                                return Ar.set(e, t), e
                            } : rc,
                            ei = rt ? function(e, t) {
                                return rt(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: Za(t),
                                    writable: !0
                                })
                            } : rc;

                        function ti(e) {
                            return Us(qa(e))
                        }

                        function ri(e, t, r) {
                            var n = -1,
                                i = e.length;
                            t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                            for (var s = se(i); ++n < i;) s[n] = e[n + t];
                            return s
                        }

                        function ni(e, t) {
                            var r;
                            return ln(e, (function(e, n, i) {
                                return !(r = t(e, n, i))
                            })), !!r
                        }

                        function ii(e, t, r) {
                            var n = 0,
                                i = null == e ? n : e.length;
                            if ("number" == typeof t && t === t && i <= 2147483647) {
                                for (; n < i;) {
                                    var s = n + i >>> 1,
                                        o = e[s];
                                    null !== o && !aa(o) && (r ? o <= t : o < t) ? n = s + 1 : i = s
                                }
                                return i
                            }
                            return si(e, t, rc, r)
                        }

                        function si(e, t, n, i) {
                            var s = 0,
                                o = null == e ? 0 : e.length;
                            if (0 === o) return 0;
                            for (var a = (t = n(t)) !== t, c = null === t, u = aa(t), h = t === r; s < o;) {
                                var l = gt((s + o) / 2),
                                    p = n(e[l]),
                                    f = p !== r,
                                    d = null === p,
                                    g = p === p,
                                    y = aa(p);
                                if (a) var v = i || g;
                                else v = h ? g && (i || f) : c ? g && f && (i || !d) : u ? g && f && !d && (i || !y) : !d && !y && (i ? p <= t : p < t);
                                v ? s = l + 1 : o = l
                            }
                            return vr(o, 4294967294)
                        }

                        function oi(e, t) {
                            for (var r = -1, n = e.length, i = 0, s = []; ++r < n;) {
                                var o = e[r],
                                    a = t ? t(o) : o;
                                if (!r || !qo(a, c)) {
                                    var c = a;
                                    s[i++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }

                        function ai(e) {
                            return "number" == typeof e ? e : aa(e) ? f : +e
                        }

                        function ci(e) {
                            if ("string" == typeof e) return e;
                            if (Bo(e)) return Ut(e, ci) + "";
                            if (aa(e)) return Mr ? Mr.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -l ? "-0" : t
                        }

                        function ui(e, t, r) {
                            var n = -1,
                                i = xt,
                                s = e.length,
                                o = !0,
                                a = [],
                                c = a;
                            if (r) o = !1, i = Ct;
                            else if (s >= 200) {
                                var u = t ? null : Gi(e);
                                if (u) return ur(u);
                                o = !1, i = Zt, c = new Wr
                            } else c = t ? [] : a;
                            e: for (; ++n < s;) {
                                var h = e[n],
                                    l = t ? t(h) : h;
                                if (h = r || 0 !== h ? h : 0, o && l === l) {
                                    for (var p = c.length; p--;)
                                        if (c[p] === l) continue e;
                                    t && c.push(l), a.push(h)
                                } else i(c, l, r) || (c !== a && c.push(l), a.push(h))
                            }
                            return a
                        }

                        function hi(e, t) {
                            return null == (e = Ps(e, t = mi(t, e))) || delete e[Ds(Gs(t))]
                        }

                        function li(e, t, r, n) {
                            return Xn(e, t, r(En(e, t)), n)
                        }

                        function pi(e, t, r, n) {
                            for (var i = e.length, s = n ? i : -1;
                                (n ? s-- : ++s < i) && t(e[s], s, e););
                            return r ? ri(e, n ? 0 : s, n ? s + 1 : i) : ri(e, n ? s + 1 : 0, n ? i : s)
                        }

                        function fi(e, t) {
                            var r = e;
                            return r instanceof Vr && (r = r.value()), Dt(t, (function(e, t) {
                                return t.func.apply(t.thisArg, jt([e], t.args))
                            }), r)
                        }

                        function di(e, t, r) {
                            var n = e.length;
                            if (n < 2) return n ? ui(e[0]) : [];
                            for (var i = -1, s = se(n); ++i < n;)
                                for (var o = e[i], a = -1; ++a < n;) a != i && (s[i] = hn(s[i] || o, e[a], t, r));
                            return ui(yn(s, 1), t, r)
                        }

                        function gi(e, t, n) {
                            for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s;) {
                                var c = i < o ? t[i] : r;
                                n(a, e[i], c)
                            }
                            return a
                        }

                        function yi(e) {
                            return Wo(e) ? e : []
                        }

                        function vi(e) {
                            return "function" == typeof e ? e : rc
                        }

                        function mi(e, t) {
                            return Bo(e) ? e : ws(e, t) ? [e] : js(va(e))
                        }
                        var wi = Yn;

                        function bi(e, t, n) {
                            var i = e.length;
                            return n = n === r ? i : n, !t && n >= i ? e : ri(e, t, n)
                        }
                        var _i = ct || function(e) {
                            return ft.clearTimeout(e)
                        };

                        function Ei(e, t) {
                            if (t) return e.slice();
                            var r = e.length,
                                n = Ke ? Ke(r) : new e.constructor(r);
                            return e.copy(n), n
                        }

                        function Ii(e) {
                            var t = new e.constructor(e.byteLength);
                            return new Fe(t).set(new Fe(e)), t
                        }

                        function Si(e, t) {
                            var r = t ? Ii(e.buffer) : e.buffer;
                            return new e.constructor(r, e.byteOffset, e.length)
                        }

                        function Oi(e, t) {
                            if (e !== t) {
                                var n = e !== r,
                                    i = null === e,
                                    s = e === e,
                                    o = aa(e),
                                    a = t !== r,
                                    c = null === t,
                                    u = t === t,
                                    h = aa(t);
                                if (!c && !h && !o && e > t || o && a && u && !c && !h || i && a && u || !n && u || !s) return 1;
                                if (!i && !o && !h && e < t || h && n && s && !i && !o || c && n && s || !a && s || !u) return -1
                            }
                            return 0
                        }

                        function Pi(e, t, r, n) {
                            for (var i = -1, s = e.length, o = r.length, a = -1, c = t.length, u = yr(s - o, 0), h = se(c + u), l = !n; ++a < c;) h[a] = t[a];
                            for (; ++i < o;)(l || i < s) && (h[r[i]] = e[i]);
                            for (; u--;) h[a++] = e[i++];
                            return h
                        }

                        function Ni(e, t, r, n) {
                            for (var i = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, h = yr(s - a, 0), l = se(h + u), p = !n; ++i < h;) l[i] = e[i];
                            for (var f = i; ++c < u;) l[f + c] = t[c];
                            for (; ++o < a;)(p || i < s) && (l[f + r[o]] = e[i++]);
                            return l
                        }

                        function Ai(e, t) {
                            var r = -1,
                                n = e.length;
                            for (t || (t = se(n)); ++r < n;) t[r] = e[r];
                            return t
                        }

                        function Ri(e, t, n, i) {
                            var s = !n;
                            n || (n = {});
                            for (var o = -1, a = t.length; ++o < a;) {
                                var c = t[o],
                                    u = i ? i(n[c], e[c], c, n, e) : r;
                                u === r && (u = e[c]), s ? nn(n, c, u) : Zr(n, c, u)
                            }
                            return n
                        }

                        function Ti(e, t) {
                            return function(r, n) {
                                var i = Bo(r) ? Pt : tn,
                                    s = t ? t() : {};
                                return i(r, e, as(n, 2), s)
                            }
                        }

                        function xi(e) {
                            return Yn((function(t, n) {
                                var i = -1,
                                    s = n.length,
                                    o = s > 1 ? n[s - 1] : r,
                                    a = s > 2 ? n[2] : r;
                                for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && ms(n[0], n[1], a) && (o = s < 3 ? r : o, s = 1), t = Pe(t); ++i < s;) {
                                    var c = n[i];
                                    c && e(t, c, i, o)
                                }
                                return t
                            }))
                        }

                        function Ci(e, t) {
                            return function(r, n) {
                                if (null == r) return r;
                                if (!Ko(r)) return e(r, n);
                                for (var i = r.length, s = t ? i : -1, o = Pe(r);
                                    (t ? s-- : ++s < i) && !1 !== n(o[s], s, o););
                                return r
                            }
                        }

                        function Ui(e) {
                            return function(t, r, n) {
                                for (var i = -1, s = Pe(t), o = n(t), a = o.length; a--;) {
                                    var c = o[e ? a : ++i];
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return t
                            }
                        }

                        function ji(e) {
                            return function(t) {
                                var n = sr(t = va(t)) ? lr(t) : r,
                                    i = n ? n[0] : t.charAt(0),
                                    s = n ? bi(n, 1).join("") : t.slice(1);
                                return i[e]() + s
                            }
                        }

                        function Di(e) {
                            return function(t) {
                                return Dt(Qa(Va(t).replace(Xe, "")), e, "")
                            }
                        }

                        function Li(e) {
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                    case 5:
                                        return new e(t[0], t[1], t[2], t[3], t[4]);
                                    case 6:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                    case 7:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                }
                                var r = qr(e.prototype),
                                    n = e.apply(r, t);
                                return Zo(n) ? n : r
                            }
                        }

                        function Mi(e) {
                            return function(t, n, i) {
                                var s = Pe(t);
                                if (!Ko(t)) {
                                    var o = as(n, 3);
                                    t = Ta(t), n = function(e) {
                                        return o(s[e], e, s)
                                    }
                                }
                                var a = e(t, n, i);
                                return a > -1 ? s[o ? t[a] : a] : r
                            }
                        }

                        function ki(e) {
                            return ts((function(t) {
                                var i = t.length,
                                    s = i,
                                    o = Hr.prototype.thru;
                                for (e && t.reverse(); s--;) {
                                    var a = t[s];
                                    if ("function" != typeof a) throw new Re(n);
                                    if (o && !c && "wrapper" == ss(a)) var c = new Hr([], !0)
                                }
                                for (s = c ? s : i; ++s < i;) {
                                    var u = ss(a = t[s]),
                                        h = "wrapper" == u ? is(a) : r;
                                    c = h && bs(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[ss(h[0])].apply(c, h[3]) : 1 == a.length && bs(a) ? c[u]() : c.thru(a)
                                }
                                return function() {
                                    var e = arguments,
                                        r = e[0];
                                    if (c && 1 == e.length && Bo(r)) return c.plant(r).value();
                                    for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i;) s = t[n].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function qi(e, t, n, i, s, o, a, c, h, l) {
                            var p = t & u,
                                f = 1 & t,
                                d = 2 & t,
                                g = 24 & t,
                                y = 512 & t,
                                v = d ? r : Li(e);
                            return function u() {
                                for (var m = arguments.length, w = se(m), b = m; b--;) w[b] = arguments[b];
                                if (g) var _ = os(u),
                                    E = function(e, t) {
                                        for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                                        return n
                                    }(w, _);
                                if (i && (w = Pi(w, i, s, g)), o && (w = Ni(w, o, a, g)), m -= E, g && m < l) {
                                    var I = cr(w, _);
                                    return Wi(e, t, qi, u.placeholder, n, w, I, c, h, l - m)
                                }
                                var S = f ? n : this,
                                    O = d ? S[e] : e;
                                return m = w.length, c ? w = function(e, t) {
                                    for (var n = e.length, i = vr(t.length, n), s = Ai(e); i--;) {
                                        var o = t[i];
                                        e[i] = vs(o, n) ? s[o] : r
                                    }
                                    return e
                                }(w, c) : y && m > 1 && w.reverse(), p && h < m && (w.length = h), this && this !== ft && this instanceof u && (O = v || Li(O)), O.apply(S, w)
                            }
                        }

                        function zi(e, t) {
                            return function(r, n) {
                                return function(e, t, r, n) {
                                    return wn(e, (function(e, i, s) {
                                        t(n, r(e), i, s)
                                    })), n
                                }(r, e, t(n), {})
                            }
                        }

                        function Hi(e, t) {
                            return function(n, i) {
                                var s;
                                if (n === r && i === r) return t;
                                if (n !== r && (s = n), i !== r) {
                                    if (s === r) return i;
                                    "string" == typeof n || "string" == typeof i ? (n = ci(n), i = ci(i)) : (n = ai(n), i = ai(i)), s = e(n, i)
                                }
                                return s
                            }
                        }

                        function Vi(e) {
                            return ts((function(t) {
                                return t = Ut(t, $t(as())), Yn((function(r) {
                                    var n = this;
                                    return e(t, (function(e) {
                                        return Ot(e, n, r)
                                    }))
                                }))
                            }))
                        }

                        function Bi(e, t) {
                            var n = (t = t === r ? " " : ci(t)).length;
                            if (n < 2) return n ? Gn(t, e) : t;
                            var i = Gn(t, dt(e / hr(t)));
                            return sr(t) ? bi(lr(i), 0, e).join("") : i.slice(0, e)
                        }

                        function Fi(e) {
                            return function(t, n, i) {
                                return i && "number" != typeof i && ms(t, n, i) && (n = i = r), t = pa(t), n === r ? (n = t, t = 0) : n = pa(n),
                                    function(e, t, r, n) {
                                        for (var i = -1, s = yr(dt((t - e) / (r || 1)), 0), o = se(s); s--;) o[n ? s : ++i] = e, e += r;
                                        return o
                                    }(t, n, i = i === r ? t < n ? 1 : -1 : pa(i), e)
                            }
                        }

                        function Ki(e) {
                            return function(t, r) {
                                return "string" == typeof t && "string" == typeof r || (t = ga(t), r = ga(r)), e(t, r)
                            }
                        }

                        function Wi(e, t, n, i, s, o, u, h, l, p) {
                            var f = 8 & t;
                            t |= f ? a : c, 4 & (t &= ~(f ? c : a)) || (t &= -4);
                            var d = [e, t, s, f ? o : r, f ? u : r, f ? r : o, f ? r : u, h, l, p],
                                g = n.apply(r, d);
                            return bs(e) && As(g, d), g.placeholder = i, xs(g, e, t)
                        }

                        function Ji(e) {
                            var t = Oe[e];
                            return function(e, r) {
                                if (e = ga(e), (r = null == r ? 0 : vr(fa(r), 292)) && kt(e)) {
                                    var n = (va(e) + "e").split("e");
                                    return +((n = (va(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                                }
                                return t(e)
                            }
                        }
                        var Gi = Or && 1 / ur(new Or([, -0]))[1] == l ? function(e) {
                            return new Or(e)
                        } : ac;

                        function Yi(e) {
                            return function(t) {
                                var r = fs(t);
                                return r == I ? or(t) : r == A ? function(e) {
                                    var t = -1,
                                        r = Array(e.size);
                                    return e.forEach((function(e) {
                                        r[++t] = [e, e]
                                    })), r
                                }(t) : function(e, t) {
                                    return Ut(t, (function(t) {
                                        return [t, e[t]]
                                    }))
                                }(t, e(t))
                            }
                        }

                        function Qi(e, t, i, l, p, f, d, g) {
                            var y = 2 & t;
                            if (!y && "function" != typeof e) throw new Re(n);
                            var v = l ? l.length : 0;
                            if (v || (t &= -97, l = p = r), d = d === r ? d : yr(fa(d), 0), g = g === r ? g : fa(g), v -= p ? p.length : 0, t & c) {
                                var m = l,
                                    w = p;
                                l = p = r
                            }
                            var b = y ? r : is(e),
                                _ = [e, t, i, l, p, m, w, f, d, g];
                            if (b && function(e, t) {
                                    var r = e[1],
                                        n = t[1],
                                        i = r | n,
                                        o = i < 131,
                                        a = n == u && 8 == r || n == u && r == h && e[7].length <= t[8] || 384 == n && t[7].length <= t[8] && 8 == r;
                                    if (!o && !a) return e;
                                    1 & n && (e[2] = t[2], i |= 1 & r ? 0 : 4);
                                    var c = t[3];
                                    if (c) {
                                        var l = e[3];
                                        e[3] = l ? Pi(l, c, t[4]) : c, e[4] = l ? cr(e[3], s) : t[4]
                                    }
                                    c = t[5], c && (l = e[5], e[5] = l ? Ni(l, c, t[6]) : c, e[6] = l ? cr(e[5], s) : t[6]), c = t[7], c && (e[7] = c), n & u && (e[8] = null == e[8] ? t[8] : vr(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
                                }(_, b), e = _[0], t = _[1], i = _[2], l = _[3], p = _[4], !(g = _[9] = _[9] === r ? y ? 0 : e.length : yr(_[9] - v, 0)) && 24 & t && (t &= -25), t && 1 != t) E = 8 == t || t == o ? function(e, t, n) {
                                var i = Li(e);
                                return function s() {
                                    for (var o = arguments.length, a = se(o), c = o, u = os(s); c--;) a[c] = arguments[c];
                                    var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : cr(a, u);
                                    return (o -= h.length) < n ? Wi(e, t, qi, s.placeholder, r, a, h, r, r, n - o) : Ot(this && this !== ft && this instanceof s ? i : e, this, a)
                                }
                            }(e, t, g) : t != a && 33 != t || p.length ? qi.apply(r, _) : function(e, t, r, n) {
                                var i = 1 & t,
                                    s = Li(e);
                                return function t() {
                                    for (var o = -1, a = arguments.length, c = -1, u = n.length, h = se(u + a), l = this && this !== ft && this instanceof t ? s : e; ++c < u;) h[c] = n[c];
                                    for (; a--;) h[c++] = arguments[++o];
                                    return Ot(l, i ? r : this, h)
                                }
                            }(e, t, i, l);
                            else var E = function(e, t, r) {
                                var n = 1 & t,
                                    i = Li(e);
                                return function t() {
                                    return (this && this !== ft && this instanceof t ? i : e).apply(n ? r : this, arguments)
                                }
                            }(e, t, i);
                            return xs((b ? Zn : As)(E, _), e, t)
                        }

                        function $i(e, t, n, i) {
                            return e === r || qo(e, Ce[n]) && !De.call(i, n) ? t : e
                        }

                        function Xi(e, t, n, i, s, o) {
                            return Zo(e) && Zo(t) && (o.set(t, e), Hn(e, t, r, Xi, o), o.delete(t)), e
                        }

                        function Zi(e) {
                            return na(e) ? r : e
                        }

                        function es(e, t, n, i, s, o) {
                            var a = 1 & n,
                                c = e.length,
                                u = t.length;
                            if (c != u && !(a && u > c)) return !1;
                            var h = o.get(e),
                                l = o.get(t);
                            if (h && l) return h == t && l == e;
                            var p = -1,
                                f = !0,
                                d = 2 & n ? new Wr : r;
                            for (o.set(e, t), o.set(t, e); ++p < c;) {
                                var g = e[p],
                                    y = t[p];
                                if (i) var v = a ? i(y, g, p, t, e, o) : i(g, y, p, e, t, o);
                                if (v !== r) {
                                    if (v) continue;
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!Mt(t, (function(e, t) {
                                            if (!Zt(d, t) && (g === e || s(g, e, n, i, o))) return d.push(t)
                                        }))) {
                                        f = !1;
                                        break
                                    }
                                } else if (g !== y && !s(g, y, n, i, o)) {
                                    f = !1;
                                    break
                                }
                            }
                            return o.delete(e), o.delete(t), f
                        }

                        function ts(e) {
                            return Ts(Os(e, r, Bs), e + "")
                        }

                        function rs(e) {
                            return In(e, Ta, ls)
                        }

                        function ns(e) {
                            return In(e, xa, ps)
                        }
                        var is = Ar ? function(e) {
                            return Ar.get(e)
                        } : ac;

                        function ss(e) {
                            for (var t = e.name + "", r = Rr[t], n = De.call(Rr, t) ? r.length : 0; n--;) {
                                var i = r[n],
                                    s = i.func;
                                if (null == s || s == e) return i.name
                            }
                            return t
                        }

                        function os(e) {
                            return (De.call(kr, "placeholder") ? kr : e).placeholder
                        }

                        function as() {
                            var e = kr.iteratee || nc;
                            return e = e === nc ? jn : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function cs(e, t) {
                            var r = e.__data__;
                            return function(e) {
                                var t = typeof e;
                                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                            }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                        }

                        function us(e) {
                            for (var t = Ta(e), r = t.length; r--;) {
                                var n = t[r],
                                    i = e[n];
                                t[r] = [n, i, Is(i)]
                            }
                            return t
                        }

                        function hs(e, t) {
                            var n = function(e, t) {
                                return null == e ? r : e[t]
                            }(e, t);
                            return Un(n) ? n : r
                        }
                        var ls = vt ? function(e) {
                                return null == e ? [] : (e = Pe(e), Tt(vt(e), (function(t) {
                                    return Ge.call(e, t)
                                })))
                            } : dc,
                            ps = vt ? function(e) {
                                for (var t = []; e;) jt(t, ls(e)), e = We(e);
                                return t
                            } : dc,
                            fs = Sn;

                        function ds(e, t, r) {
                            for (var n = -1, i = (t = mi(t, e)).length, s = !1; ++n < i;) {
                                var o = Ds(t[n]);
                                if (!(s = null != e && r(e, o))) break;
                                e = e[o]
                            }
                            return s || ++n != i ? s : !!(i = null == e ? 0 : e.length) && Xo(i) && vs(o, i) && (Bo(e) || Vo(e))
                        }

                        function gs(e) {
                            return "function" != typeof e.constructor || Es(e) ? {} : qr(We(e))
                        }

                        function ys(e) {
                            return Bo(e) || Vo(e) || !!(Qe && e && e[Qe])
                        }

                        function vs(e, t) {
                            var r, n = typeof e;
                            return !!(t = null !== (r = t) && void 0 !== r ? r : p) && ("number" == n || "symbol" != n && me.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function ms(e, t, r) {
                            if (!Zo(r)) return !1;
                            var n = typeof t;
                            return !!("number" == n ? Ko(r) && vs(t, r.length) : "string" == n && t in r) && qo(r[t], e)
                        }

                        function ws(e, t) {
                            if (Bo(e)) return !1;
                            var r = typeof e;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != e && !aa(e)) || (ee.test(e) || !Z.test(e) || null != t && e in Pe(t))
                        }

                        function bs(e) {
                            var t = ss(e),
                                r = kr[t];
                            if ("function" != typeof r || !(t in Vr.prototype)) return !1;
                            if (e === r) return !0;
                            var n = is(r);
                            return !!n && e === n[0]
                        }(Er && fs(new Er(new ArrayBuffer(1))) != U || Ir && fs(new Ir) != I || Sr && fs(Sr.resolve()) != P || Or && fs(new Or) != A || Pr && fs(new Pr) != x) && (fs = function(e) {
                            var t = Sn(e),
                                n = t == O ? e.constructor : r,
                                i = n ? Ls(n) : "";
                            if (i) switch (i) {
                                case Tr:
                                    return U;
                                case xr:
                                    return I;
                                case Cr:
                                    return P;
                                case Ur:
                                    return A;
                                case jr:
                                    return x
                            }
                            return t
                        });
                        var _s = Ue ? Qo : gc;

                        function Es(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || Ce)
                        }

                        function Is(e) {
                            return e === e && !Zo(e)
                        }

                        function Ss(e, t) {
                            return function(n) {
                                return null != n && (n[e] === t && (t !== r || e in Pe(n)))
                            }
                        }

                        function Os(e, t, n) {
                            return t = yr(t === r ? e.length - 1 : t, 0),
                                function() {
                                    for (var r = arguments, i = -1, s = yr(r.length - t, 0), o = se(s); ++i < s;) o[i] = r[t + i];
                                    i = -1;
                                    for (var a = se(t + 1); ++i < t;) a[i] = r[i];
                                    return a[t] = n(o), Ot(e, this, a)
                                }
                        }

                        function Ps(e, t) {
                            return t.length < 2 ? e : En(e, ri(t, 0, -1))
                        }

                        function Ns(e, t) {
                            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                        }
                        var As = Cs(Zn),
                            Rs = pt || function(e, t) {
                                return ft.setTimeout(e, t)
                            },
                            Ts = Cs(ei);

                        function xs(e, t, r) {
                            var n = t + "";
                            return Ts(e, function(e, t) {
                                var r = t.length;
                                if (!r) return e;
                                var n = r - 1;
                                return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                            }(n, function(e, t) {
                                return Nt(g, (function(r) {
                                    var n = "_." + r[0];
                                    t & r[1] && !xt(e, n) && e.push(n)
                                })), e.sort()
                            }(function(e) {
                                var t = e.match(ae);
                                return t ? t[1].split(ce) : []
                            }(n), r)))
                        }

                        function Cs(e) {
                            var t = 0,
                                n = 0;
                            return function() {
                                var i = mr(),
                                    s = 16 - (i - n);
                                if (n = i, s > 0) {
                                    if (++t >= 800) return arguments[0]
                                } else t = 0;
                                return e.apply(r, arguments)
                            }
                        }

                        function Us(e, t) {
                            var n = -1,
                                i = e.length,
                                s = i - 1;
                            for (t = t === r ? i : t; ++n < t;) {
                                var o = Jn(n, s),
                                    a = e[o];
                                e[o] = e[n], e[n] = a
                            }
                            return e.length = t, e
                        }
                        var js = function(e) {
                            var t = Uo(e, (function(e) {
                                    return 500 === r.size && r.clear(), e
                                })),
                                r = t.cache;
                            return t
                        }((function(e) {
                            var t = [];
                            return 46 === e.charCodeAt(0) && t.push(""), e.replace(te, (function(e, r, n, i) {
                                t.push(n ? i.replace(le, "$1") : r || e)
                            })), t
                        }));

                        function Ds(e) {
                            if ("string" == typeof e || aa(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -l ? "-0" : t
                        }

                        function Ls(e) {
                            if (null != e) {
                                try {
                                    return je.call(e)
                                } catch {}
                                try {
                                    return e + ""
                                } catch {}
                            }
                            return ""
                        }

                        function Ms(e) {
                            if (e instanceof Vr) return e.clone();
                            var t = new Hr(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Ai(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }
                        var ks = Yn((function(e, t) {
                                return Wo(e) ? hn(e, yn(t, 1, Wo, !0)) : []
                            })),
                            qs = Yn((function(e, t) {
                                var n = Gs(t);
                                return Wo(n) && (n = r), Wo(e) ? hn(e, yn(t, 1, Wo, !0), as(n, 2)) : []
                            })),
                            zs = Yn((function(e, t) {
                                var n = Gs(t);
                                return Wo(n) && (n = r), Wo(e) ? hn(e, yn(t, 1, Wo, !0), r, n) : []
                            }));

                        function Hs(e, t, r) {
                            var n = null == e ? 0 : e.length;
                            if (!n) return -1;
                            var i = null == r ? 0 : fa(r);
                            return i < 0 && (i = yr(n + i, 0)), zt(e, as(t, 3), i)
                        }

                        function Vs(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i - 1;
                            return n !== r && (s = fa(n), s = n < 0 ? yr(i + s, 0) : vr(s, i - 1)), zt(e, as(t, 3), s, !0)
                        }

                        function Bs(e) {
                            return (null == e ? 0 : e.length) ? yn(e, 1) : []
                        }

                        function Fs(e) {
                            return e && e.length ? e[0] : r
                        }
                        var Ks = Yn((function(e) {
                                var t = Ut(e, yi);
                                return t.length && t[0] === e[0] ? An(t) : []
                            })),
                            Ws = Yn((function(e) {
                                var t = Gs(e),
                                    n = Ut(e, yi);
                                return t === Gs(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? An(n, as(t, 2)) : []
                            })),
                            Js = Yn((function(e) {
                                var t = Gs(e),
                                    n = Ut(e, yi);
                                return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? An(n, r, t) : []
                            }));

                        function Gs(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : r
                        }
                        var Ys = Yn(Qs);

                        function Qs(e, t) {
                            return e && e.length && t && t.length ? Kn(e, t) : e
                        }
                        var $s = ts((function(e, t) {
                            var r = null == e ? 0 : e.length,
                                n = sn(e, t);
                            return Wn(e, Ut(t, (function(e) {
                                return vs(e, r) ? +e : e
                            })).sort(Oi)), n
                        }));

                        function Xs(e) {
                            return null == e ? e : _r.call(e)
                        }
                        var Zs = Yn((function(e) {
                                return ui(yn(e, 1, Wo, !0))
                            })),
                            eo = Yn((function(e) {
                                var t = Gs(e);
                                return Wo(t) && (t = r), ui(yn(e, 1, Wo, !0), as(t, 2))
                            })),
                            to = Yn((function(e) {
                                var t = Gs(e);
                                return t = "function" == typeof t ? t : r, ui(yn(e, 1, Wo, !0), r, t)
                            }));

                        function ro(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = Tt(e, (function(e) {
                                if (Wo(e)) return t = yr(e.length, t), !0
                            })), Yt(t, (function(t) {
                                return Ut(e, Kt(t))
                            }))
                        }

                        function no(e, t) {
                            if (!e || !e.length) return [];
                            var n = ro(e);
                            return null == t ? n : Ut(n, (function(e) {
                                return Ot(t, r, e)
                            }))
                        }
                        var io = Yn((function(e, t) {
                                return Wo(e) ? hn(e, t) : []
                            })),
                            so = Yn((function(e) {
                                return di(Tt(e, Wo))
                            })),
                            oo = Yn((function(e) {
                                var t = Gs(e);
                                return Wo(t) && (t = r), di(Tt(e, Wo), as(t, 2))
                            })),
                            ao = Yn((function(e) {
                                var t = Gs(e);
                                return t = "function" == typeof t ? t : r, di(Tt(e, Wo), r, t)
                            })),
                            co = Yn(ro);
                        var uo = Yn((function(e) {
                            var t = e.length,
                                n = t > 1 ? e[t - 1] : r;
                            return n = "function" == typeof n ? (e.pop(), n) : r, no(e, n)
                        }));

                        function ho(e) {
                            var t = kr(e);
                            return t.__chain__ = !0, t
                        }

                        function lo(e, t) {
                            return t(e)
                        }
                        var po = ts((function(e) {
                            var t = e.length,
                                n = t ? e[0] : 0,
                                i = this.__wrapped__,
                                s = function(t) {
                                    return sn(t, e)
                                };
                            return !(t > 1 || this.__actions__.length) && i instanceof Vr && vs(n) ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                                func: lo,
                                args: [s],
                                thisArg: r
                            }), new Hr(i, this.__chain__).thru((function(e) {
                                return t && !e.length && e.push(r), e
                            }))) : this.thru(s)
                        }));
                        var fo = Ti((function(e, t, r) {
                            De.call(e, r) ? ++e[r] : nn(e, r, 1)
                        }));
                        var go = Mi(Hs),
                            yo = Mi(Vs);

                        function vo(e, t) {
                            return (Bo(e) ? Nt : ln)(e, as(t, 3))
                        }

                        function mo(e, t) {
                            return (Bo(e) ? At : pn)(e, as(t, 3))
                        }
                        var wo = Ti((function(e, t, r) {
                            De.call(e, r) ? e[r].push(t) : nn(e, r, [t])
                        }));
                        var bo = Yn((function(e, t, r) {
                                var n = -1,
                                    i = "function" == typeof t,
                                    s = Ko(e) ? se(e.length) : [];
                                return ln(e, (function(e) {
                                    s[++n] = i ? Ot(t, e, r) : Rn(e, t, r)
                                })), s
                            })),
                            _o = Ti((function(e, t, r) {
                                nn(e, r, t)
                            }));

                        function Eo(e, t) {
                            return (Bo(e) ? Ut : kn)(e, as(t, 3))
                        }
                        var Io = Ti((function(e, t, r) {
                            e[r ? 0 : 1].push(t)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var So = Yn((function(e, t) {
                                if (null == e) return [];
                                var r = t.length;
                                return r > 1 && ms(e, t[0], t[1]) ? t = [] : r > 2 && ms(t[0], t[1], t[2]) && (t = [t[0]]), Bn(e, yn(t, 1), [])
                            })),
                            Oo = lt || function() {
                                return ft.Date.now()
                            };

                        function Po(e, t, n) {
                            return t = n ? r : t, t = e && null == t ? e.length : t, Qi(e, u, r, r, r, r, t)
                        }

                        function No(e, t) {
                            var i;
                            if ("function" != typeof t) throw new Re(n);
                            return e = fa(e),
                                function() {
                                    return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i
                                }
                        }
                        var Ao = Yn((function(e, t, r) {
                                var n = 1;
                                if (r.length) {
                                    var i = cr(r, os(Ao));
                                    n |= a
                                }
                                return Qi(e, n, t, r, i)
                            })),
                            Ro = Yn((function(e, t, r) {
                                var n = 3;
                                if (r.length) {
                                    var i = cr(r, os(Ro));
                                    n |= a
                                }
                                return Qi(t, n, e, r, i)
                            }));

                        function To(e, t, i) {
                            var s, o, a, c, u, h, l = 0,
                                p = !1,
                                f = !1,
                                d = !0;
                            if ("function" != typeof e) throw new Re(n);

                            function g(t) {
                                var n = s,
                                    i = o;
                                return s = o = r, l = t, c = e.apply(i, n)
                            }

                            function y(e) {
                                var n = e - h;
                                return h === r || n >= t || n < 0 || f && e - l >= a
                            }

                            function v() {
                                var e = Oo();
                                if (y(e)) return m(e);
                                u = Rs(v, function(e) {
                                    var r = t - (e - h);
                                    return f ? vr(r, a - (e - l)) : r
                                }(e))
                            }

                            function m(e) {
                                return u = r, d && s ? g(e) : (s = o = r, c)
                            }

                            function w() {
                                var e = Oo(),
                                    n = y(e);
                                if (s = arguments, o = this, h = e, n) {
                                    if (u === r) return function(e) {
                                        return l = e, u = Rs(v, t), p ? g(e) : c
                                    }(h);
                                    if (f) return _i(u), u = Rs(v, t), g(h)
                                }
                                return u === r && (u = Rs(v, t)), c
                            }
                            return t = ga(t) || 0, Zo(i) && (p = !!i.leading, a = (f = "maxWait" in i) ? yr(ga(i.maxWait) || 0, t) : a, d = "trailing" in i ? !!i.trailing : d), w.cancel = function() {
                                u !== r && _i(u), l = 0, s = h = o = u = r
                            }, w.flush = function() {
                                return u === r ? c : m(Oo())
                            }, w
                        }
                        var xo = Yn((function(e, t) {
                                return un(e, 1, t)
                            })),
                            Co = Yn((function(e, t, r) {
                                return un(e, ga(t) || 0, r)
                            }));

                        function Uo(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new Re(n);
                            var r = function() {
                                var n = arguments,
                                    i = t ? t.apply(this, n) : n[0],
                                    s = r.cache;
                                if (s.has(i)) return s.get(i);
                                var o = e.apply(this, n);
                                return r.cache = s.set(i, o) || s, o
                            };
                            return r.cache = new(Uo.Cache || Kr), r
                        }

                        function jo(e) {
                            if ("function" != typeof e) throw new Re(n);
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2])
                                }
                                return !e.apply(this, t)
                            }
                        }
                        Uo.Cache = Kr;
                        var Do = wi((function(e, t) {
                                var r = (t = 1 == t.length && Bo(t[0]) ? Ut(t[0], $t(as())) : Ut(yn(t, 1), $t(as()))).length;
                                return Yn((function(n) {
                                    for (var i = -1, s = vr(n.length, r); ++i < s;) n[i] = t[i].call(this, n[i]);
                                    return Ot(e, this, n)
                                }))
                            })),
                            Lo = Yn((function(e, t) {
                                var n = cr(t, os(Lo));
                                return Qi(e, a, r, t, n)
                            })),
                            Mo = Yn((function(e, t) {
                                var n = cr(t, os(Mo));
                                return Qi(e, c, r, t, n)
                            })),
                            ko = ts((function(e, t) {
                                return Qi(e, h, r, r, r, t)
                            }));

                        function qo(e, t) {
                            return e === t || e !== e && t !== t
                        }
                        var zo = Ki(On),
                            Ho = Ki((function(e, t) {
                                return e >= t
                            })),
                            Vo = Tn(function() {
                                return arguments
                            }()) ? Tn : function(e) {
                                return ea(e) && De.call(e, "callee") && !Ge.call(e, "callee")
                            },
                            Bo = se.isArray,
                            Fo = wt ? $t(wt) : function(e) {
                                return ea(e) && Sn(e) == C
                            };

                        function Ko(e) {
                            return null != e && Xo(e.length) && !Qo(e)
                        }

                        function Wo(e) {
                            return ea(e) && Ko(e)
                        }
                        var Jo = mt || gc,
                            Go = bt ? $t(bt) : function(e) {
                                return ea(e) && Sn(e) == w
                            };

                        function Yo(e) {
                            if (!ea(e)) return !1;
                            var t = Sn(e);
                            return t == b || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !na(e)
                        }

                        function Qo(e) {
                            if (!Zo(e)) return !1;
                            var t = Sn(e);
                            return t == _ || t == E || "[object AsyncFunction]" == t || "[object Proxy]" == t
                        }

                        function $o(e) {
                            return "number" == typeof e && e == fa(e)
                        }

                        function Xo(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= p
                        }

                        function Zo(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function ea(e) {
                            return null != e && "object" == typeof e
                        }
                        var ta = _t ? $t(_t) : function(e) {
                            return ea(e) && fs(e) == I
                        };

                        function ra(e) {
                            return "number" == typeof e || ea(e) && Sn(e) == S
                        }

                        function na(e) {
                            if (!ea(e) || Sn(e) != O) return !1;
                            var t = We(e);
                            if (null === t) return !0;
                            var r = De.call(t, "constructor") && t.constructor;
                            return "function" == typeof r && r instanceof r && je.call(r) == qe
                        }
                        var ia = Et ? $t(Et) : function(e) {
                            return ea(e) && Sn(e) == N
                        };
                        var sa = It ? $t(It) : function(e) {
                            return ea(e) && fs(e) == A
                        };

                        function oa(e) {
                            return "string" == typeof e || !Bo(e) && ea(e) && Sn(e) == R
                        }

                        function aa(e) {
                            return "symbol" == typeof e || ea(e) && Sn(e) == T
                        }
                        var ca = St ? $t(St) : function(e) {
                            return ea(e) && Xo(e.length) && !!ot[Sn(e)]
                        };
                        var ua = Ki(Mn),
                            ha = Ki((function(e, t) {
                                return e <= t
                            }));

                        function la(e) {
                            if (!e) return [];
                            if (Ko(e)) return oa(e) ? lr(e) : Ai(e);
                            if ($e && e[$e]) return function(e) {
                                for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                return r
                            }(e[$e]());
                            var t = fs(e);
                            return (t == I ? or : t == A ? ur : qa)(e)
                        }

                        function pa(e) {
                            return e ? (e = ga(e)) === l || e === -l ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                        }

                        function fa(e) {
                            var t = pa(e),
                                r = t % 1;
                            return t === t ? r ? t - r : t : 0
                        }

                        function da(e) {
                            return e ? on(fa(e), 0, d) : 0
                        }

                        function ga(e) {
                            if ("number" == typeof e) return e;
                            if (aa(e)) return f;
                            if (Zo(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = Zo(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = Qt(e);
                            var r = ge.test(e);
                            return r || ve.test(e) ? ht(e.slice(2), r ? 2 : 8) : de.test(e) ? f : +e
                        }

                        function ya(e) {
                            return Ri(e, xa(e))
                        }

                        function va(e) {
                            return null == e ? "" : ci(e)
                        }
                        var ma = xi((function(e, t) {
                                if (Es(t) || Ko(t)) Ri(t, Ta(t), e);
                                else
                                    for (var r in t) De.call(t, r) && Zr(e, r, t[r])
                            })),
                            wa = xi((function(e, t) {
                                Ri(t, xa(t), e)
                            })),
                            ba = xi((function(e, t, r, n) {
                                Ri(t, xa(t), e, n)
                            })),
                            _a = xi((function(e, t, r, n) {
                                Ri(t, Ta(t), e, n)
                            })),
                            Ea = ts(sn);
                        var Ia = Yn((function(e, t) {
                                e = Pe(e);
                                var n = -1,
                                    i = t.length,
                                    s = i > 2 ? t[2] : r;
                                for (s && ms(t[0], t[1], s) && (i = 1); ++n < i;)
                                    for (var o = t[n], a = xa(o), c = -1, u = a.length; ++c < u;) {
                                        var h = a[c],
                                            l = e[h];
                                        (l === r || qo(l, Ce[h]) && !De.call(e, h)) && (e[h] = o[h])
                                    }
                                return e
                            })),
                            Sa = Yn((function(e) {
                                return e.push(r, Xi), Ot(Ua, r, e)
                            }));

                        function Oa(e, t, n) {
                            var i = null == e ? r : En(e, t);
                            return i === r ? n : i
                        }

                        function Pa(e, t) {
                            return null != e && ds(e, t, Nn)
                        }
                        var Na = zi((function(e, t, r) {
                                null != t && "function" != typeof t.toString && (t = ke.call(t)), e[t] = r
                            }), Za(rc)),
                            Aa = zi((function(e, t, r) {
                                null != t && "function" != typeof t.toString && (t = ke.call(t)), De.call(e, t) ? e[t].push(r) : e[t] = [r]
                            }), as),
                            Ra = Yn(Rn);

                        function Ta(e) {
                            return Ko(e) ? Gr(e) : Dn(e)
                        }

                        function xa(e) {
                            return Ko(e) ? Gr(e, !0) : Ln(e)
                        }
                        var Ca = xi((function(e, t, r) {
                                Hn(e, t, r)
                            })),
                            Ua = xi((function(e, t, r, n) {
                                Hn(e, t, r, n)
                            })),
                            ja = ts((function(e, t) {
                                var r = {};
                                if (null == e) return r;
                                var n = !1;
                                t = Ut(t, (function(t) {
                                    return t = mi(t, e), n || (n = t.length > 1), t
                                })), Ri(e, ns(e), r), n && (r = an(r, 7, Zi));
                                for (var i = t.length; i--;) hi(r, t[i]);
                                return r
                            }));
                        var Da = ts((function(e, t) {
                            return null == e ? {} : function(e, t) {
                                return Fn(e, t, (function(t, r) {
                                    return Pa(e, r)
                                }))
                            }(e, t)
                        }));

                        function La(e, t) {
                            if (null == e) return {};
                            var r = Ut(ns(e), (function(e) {
                                return [e]
                            }));
                            return t = as(t), Fn(e, r, (function(e, r) {
                                return t(e, r[0])
                            }))
                        }
                        var Ma = Yi(Ta),
                            ka = Yi(xa);

                        function qa(e) {
                            return null == e ? [] : Xt(e, Ta(e))
                        }
                        var za = Di((function(e, t, r) {
                            return t = t.toLowerCase(), e + (r ? Ha(t) : t)
                        }));

                        function Ha(e) {
                            return Ya(va(e).toLowerCase())
                        }

                        function Va(e) {
                            return (e = va(e)) && e.replace(we, rr).replace(Ze, "")
                        }
                        var Ba = Di((function(e, t, r) {
                                return e + (r ? "-" : "") + t.toLowerCase()
                            })),
                            Fa = Di((function(e, t, r) {
                                return e + (r ? " " : "") + t.toLowerCase()
                            })),
                            Ka = ji("toLowerCase");
                        var Wa = Di((function(e, t, r) {
                            return e + (r ? "_" : "") + t.toLowerCase()
                        }));
                        var Ja = Di((function(e, t, r) {
                            return e + (r ? " " : "") + Ya(t)
                        }));
                        var Ga = Di((function(e, t, r) {
                                return e + (r ? " " : "") + t.toUpperCase()
                            })),
                            Ya = ji("toUpperCase");

                        function Qa(e, t, n) {
                            return e = va(e), (t = n ? r : t) === r ? function(e) {
                                return nt.test(e)
                            }(e) ? function(e) {
                                return e.match(tt) || []
                            }(e) : function(e) {
                                return e.match(ue) || []
                            }(e) : e.match(t) || []
                        }
                        var $a = Yn((function(e, t) {
                                try {
                                    return Ot(e, r, t)
                                } catch (n) {
                                    return Yo(n) ? n : new Ie(n)
                                }
                            })),
                            Xa = ts((function(e, t) {
                                return Nt(t, (function(t) {
                                    t = Ds(t), nn(e, t, Ao(e[t], e))
                                })), e
                            }));

                        function Za(e) {
                            return function() {
                                return e
                            }
                        }
                        var ec = ki(),
                            tc = ki(!0);

                        function rc(e) {
                            return e
                        }

                        function nc(e) {
                            return jn("function" == typeof e ? e : an(e, 1))
                        }
                        var ic = Yn((function(e, t) {
                                return function(r) {
                                    return Rn(r, e, t)
                                }
                            })),
                            sc = Yn((function(e, t) {
                                return function(r) {
                                    return Rn(e, r, t)
                                }
                            }));

                        function oc(e, t, r) {
                            var n = Ta(t),
                                i = _n(t, n);
                            null == r && (!Zo(t) || !i.length && n.length) && (r = t, t = e, e = this, i = _n(t, Ta(t)));
                            var s = !(Zo(r) && "chain" in r) || !!r.chain,
                                o = Qo(e);
                            return Nt(i, (function(r) {
                                var n = t[r];
                                e[r] = n, o && (e.prototype[r] = function() {
                                    var t = this.__chain__;
                                    if (s || t) {
                                        var r = e(this.__wrapped__);
                                        return (r.__actions__ = Ai(this.__actions__)).push({
                                            func: n,
                                            args: arguments,
                                            thisArg: e
                                        }), r.__chain__ = t, r
                                    }
                                    return n.apply(e, jt([this.value()], arguments))
                                })
                            })), e
                        }

                        function ac() {}
                        var cc = Vi(Ut),
                            uc = Vi(Rt),
                            hc = Vi(Mt);

                        function lc(e) {
                            return ws(e) ? Kt(Ds(e)) : function(e) {
                                return function(t) {
                                    return En(t, e)
                                }
                            }(e)
                        }
                        var pc = Fi(),
                            fc = Fi(!0);

                        function dc() {
                            return []
                        }

                        function gc() {
                            return !1
                        }
                        var yc = Hi((function(e, t) {
                                return e + t
                            }), 0),
                            vc = Ji("ceil"),
                            mc = Hi((function(e, t) {
                                return e / t
                            }), 1),
                            wc = Ji("floor");
                        var bc = Hi((function(e, t) {
                                return e * t
                            }), 1),
                            _c = Ji("round"),
                            Ec = Hi((function(e, t) {
                                return e - t
                            }), 0);
                        return kr.after = function(e, t) {
                            if ("function" != typeof t) throw new Re(n);
                            return e = fa(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }, kr.ary = Po, kr.assign = ma, kr.assignIn = wa, kr.assignInWith = ba, kr.assignWith = _a, kr.at = Ea, kr.before = No, kr.bind = Ao, kr.bindAll = Xa, kr.bindKey = Ro, kr.castArray = function() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return Bo(e) ? e : [e]
                        }, kr.chain = ho, kr.chunk = function(e, t, n) {
                            t = (n ? ms(e, t, n) : t === r) ? 1 : yr(fa(t), 0);
                            var i = null == e ? 0 : e.length;
                            if (!i || t < 1) return [];
                            for (var s = 0, o = 0, a = se(dt(i / t)); s < i;) a[o++] = ri(e, s, s += t);
                            return a
                        }, kr.compact = function(e) {
                            for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                                var s = e[t];
                                s && (i[n++] = s)
                            }
                            return i
                        }, kr.concat = function() {
                            var e = arguments.length;
                            if (!e) return [];
                            for (var t = se(e - 1), r = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                            return jt(Bo(r) ? Ai(r) : [r], yn(t, 1))
                        }, kr.cond = function(e) {
                            var t = null == e ? 0 : e.length,
                                r = as();
                            return e = t ? Ut(e, (function(e) {
                                if ("function" != typeof e[1]) throw new Re(n);
                                return [r(e[0]), e[1]]
                            })) : [], Yn((function(r) {
                                for (var n = -1; ++n < t;) {
                                    var i = e[n];
                                    if (Ot(i[0], this, r)) return Ot(i[1], this, r)
                                }
                            }))
                        }, kr.conforms = function(e) {
                            return function(e) {
                                var t = Ta(e);
                                return function(r) {
                                    return cn(r, e, t)
                                }
                            }(an(e, 1))
                        }, kr.constant = Za, kr.countBy = fo, kr.create = function(e, t) {
                            var r = qr(e);
                            return null == t ? r : rn(r, t)
                        }, kr.curry = function e(t, n, i) {
                            var s = Qi(t, 8, r, r, r, r, r, n = i ? r : n);
                            return s.placeholder = e.placeholder, s
                        }, kr.curryRight = function e(t, n, i) {
                            var s = Qi(t, o, r, r, r, r, r, n = i ? r : n);
                            return s.placeholder = e.placeholder, s
                        }, kr.debounce = To, kr.defaults = Ia, kr.defaultsDeep = Sa, kr.defer = xo, kr.delay = Co, kr.difference = ks, kr.differenceBy = qs, kr.differenceWith = zs, kr.drop = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, (t = n || t === r ? 1 : fa(t)) < 0 ? 0 : t, i) : []
                        }, kr.dropRight = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, 0, (t = i - (t = n || t === r ? 1 : fa(t))) < 0 ? 0 : t) : []
                        }, kr.dropRightWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !0, !0) : []
                        }, kr.dropWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !0) : []
                        }, kr.fill = function(e, t, n, i) {
                            var s = null == e ? 0 : e.length;
                            return s ? (n && "number" != typeof n && ms(e, t, n) && (n = 0, i = s), function(e, t, n, i) {
                                var s = e.length;
                                for ((n = fa(n)) < 0 && (n = -n > s ? 0 : s + n), (i = i === r || i > s ? s : fa(i)) < 0 && (i += s), i = n > i ? 0 : da(i); n < i;) e[n++] = t;
                                return e
                            }(e, t, n, i)) : []
                        }, kr.filter = function(e, t) {
                            return (Bo(e) ? Tt : gn)(e, as(t, 3))
                        }, kr.flatMap = function(e, t) {
                            return yn(Eo(e, t), 1)
                        }, kr.flatMapDeep = function(e, t) {
                            return yn(Eo(e, t), l)
                        }, kr.flatMapDepth = function(e, t, n) {
                            return n = n === r ? 1 : fa(n), yn(Eo(e, t), n)
                        }, kr.flatten = Bs, kr.flattenDeep = function(e) {
                            return (null == e ? 0 : e.length) ? yn(e, l) : []
                        }, kr.flattenDepth = function(e, t) {
                            return (null == e ? 0 : e.length) ? yn(e, t = t === r ? 1 : fa(t)) : []
                        }, kr.flip = function(e) {
                            return Qi(e, 512)
                        }, kr.flow = ec, kr.flowRight = tc, kr.fromPairs = function(e) {
                            for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                                var i = e[t];
                                n[i[0]] = i[1]
                            }
                            return n
                        }, kr.functions = function(e) {
                            return null == e ? [] : _n(e, Ta(e))
                        }, kr.functionsIn = function(e) {
                            return null == e ? [] : _n(e, xa(e))
                        }, kr.groupBy = wo, kr.initial = function(e) {
                            return (null == e ? 0 : e.length) ? ri(e, 0, -1) : []
                        }, kr.intersection = Ks, kr.intersectionBy = Ws, kr.intersectionWith = Js, kr.invert = Na, kr.invertBy = Aa, kr.invokeMap = bo, kr.iteratee = nc, kr.keyBy = _o, kr.keys = Ta, kr.keysIn = xa, kr.map = Eo, kr.mapKeys = function(e, t) {
                            var r = {};
                            return t = as(t, 3), wn(e, (function(e, n, i) {
                                nn(r, t(e, n, i), e)
                            })), r
                        }, kr.mapValues = function(e, t) {
                            var r = {};
                            return t = as(t, 3), wn(e, (function(e, n, i) {
                                nn(r, n, t(e, n, i))
                            })), r
                        }, kr.matches = function(e) {
                            return qn(an(e, 1))
                        }, kr.matchesProperty = function(e, t) {
                            return zn(e, an(t, 1))
                        }, kr.memoize = Uo, kr.merge = Ca, kr.mergeWith = Ua, kr.method = ic, kr.methodOf = sc, kr.mixin = oc, kr.negate = jo, kr.nthArg = function(e) {
                            return e = fa(e), Yn((function(t) {
                                return Vn(t, e)
                            }))
                        }, kr.omit = ja, kr.omitBy = function(e, t) {
                            return La(e, jo(as(t)))
                        }, kr.once = function(e) {
                            return No(2, e)
                        }, kr.orderBy = function(e, t, n, i) {
                            return null == e ? [] : (Bo(t) || (t = null == t ? [] : [t]), Bo(n = i ? r : n) || (n = null == n ? [] : [n]), Bn(e, t, n))
                        }, kr.over = cc, kr.overArgs = Do, kr.overEvery = uc, kr.overSome = hc, kr.partial = Lo, kr.partialRight = Mo, kr.partition = Io, kr.pick = Da, kr.pickBy = La, kr.property = lc, kr.propertyOf = function(e) {
                            return function(t) {
                                return null == e ? r : En(e, t)
                            }
                        }, kr.pull = Ys, kr.pullAll = Qs, kr.pullAllBy = function(e, t, r) {
                            return e && e.length && t && t.length ? Kn(e, t, as(r, 2)) : e
                        }, kr.pullAllWith = function(e, t, n) {
                            return e && e.length && t && t.length ? Kn(e, t, r, n) : e
                        }, kr.pullAt = $s, kr.range = pc, kr.rangeRight = fc, kr.rearg = ko, kr.reject = function(e, t) {
                            return (Bo(e) ? Tt : gn)(e, jo(as(t, 3)))
                        }, kr.remove = function(e, t) {
                            var r = [];
                            if (!e || !e.length) return r;
                            var n = -1,
                                i = [],
                                s = e.length;
                            for (t = as(t, 3); ++n < s;) {
                                var o = e[n];
                                t(o, n, e) && (r.push(o), i.push(n))
                            }
                            return Wn(e, i), r
                        }, kr.rest = function(e, t) {
                            if ("function" != typeof e) throw new Re(n);
                            return Yn(e, t = t === r ? t : fa(t))
                        }, kr.reverse = Xs, kr.sampleSize = function(e, t, n) {
                            return t = (n ? ms(e, t, n) : t === r) ? 1 : fa(t), (Bo(e) ? Qr : $n)(e, t)
                        }, kr.set = function(e, t, r) {
                            return null == e ? e : Xn(e, t, r)
                        }, kr.setWith = function(e, t, n, i) {
                            return i = "function" == typeof i ? i : r, null == e ? e : Xn(e, t, n, i)
                        }, kr.shuffle = function(e) {
                            return (Bo(e) ? $r : ti)(e)
                        }, kr.slice = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (n && "number" != typeof n && ms(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : fa(t), n = n === r ? i : fa(n)), ri(e, t, n)) : []
                        }, kr.sortBy = So, kr.sortedUniq = function(e) {
                            return e && e.length ? oi(e) : []
                        }, kr.sortedUniqBy = function(e, t) {
                            return e && e.length ? oi(e, as(t, 2)) : []
                        }, kr.split = function(e, t, n) {
                            return n && "number" != typeof n && ms(e, t, n) && (t = n = r), (n = n === r ? d : n >>> 0) ? (e = va(e)) && ("string" == typeof t || null != t && !ia(t)) && (!(t = ci(t)) && sr(e)) ? bi(lr(e), 0, n) : e.split(t, n) : []
                        }, kr.spread = function(e, t) {
                            if ("function" != typeof e) throw new Re(n);
                            return t = null == t ? 0 : yr(fa(t), 0), Yn((function(r) {
                                var n = r[t],
                                    i = bi(r, 0, t);
                                return n && jt(i, n), Ot(e, this, i)
                            }))
                        }, kr.tail = function(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? ri(e, 1, t) : []
                        }, kr.take = function(e, t, n) {
                            return e && e.length ? ri(e, 0, (t = n || t === r ? 1 : fa(t)) < 0 ? 0 : t) : []
                        }, kr.takeRight = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? ri(e, (t = i - (t = n || t === r ? 1 : fa(t))) < 0 ? 0 : t, i) : []
                        }, kr.takeRightWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3), !1, !0) : []
                        }, kr.takeWhile = function(e, t) {
                            return e && e.length ? pi(e, as(t, 3)) : []
                        }, kr.tap = function(e, t) {
                            return t(e), e
                        }, kr.throttle = function(e, t, r) {
                            var i = !0,
                                s = !0;
                            if ("function" != typeof e) throw new Re(n);
                            return Zo(r) && (i = "leading" in r ? !!r.leading : i, s = "trailing" in r ? !!r.trailing : s), To(e, t, {
                                leading: i,
                                maxWait: t,
                                trailing: s
                            })
                        }, kr.thru = lo, kr.toArray = la, kr.toPairs = Ma, kr.toPairsIn = ka, kr.toPath = function(e) {
                            return Bo(e) ? Ut(e, Ds) : aa(e) ? [e] : Ai(js(va(e)))
                        }, kr.toPlainObject = ya, kr.transform = function(e, t, r) {
                            var n = Bo(e),
                                i = n || Jo(e) || ca(e);
                            if (t = as(t, 4), null == r) {
                                var s = e && e.constructor;
                                r = i ? n ? new s : [] : Zo(e) && Qo(s) ? qr(We(e)) : {}
                            }
                            return (i ? Nt : wn)(e, (function(e, n, i) {
                                return t(r, e, n, i)
                            })), r
                        }, kr.unary = function(e) {
                            return Po(e, 1)
                        }, kr.union = Zs, kr.unionBy = eo, kr.unionWith = to, kr.uniq = function(e) {
                            return e && e.length ? ui(e) : []
                        }, kr.uniqBy = function(e, t) {
                            return e && e.length ? ui(e, as(t, 2)) : []
                        }, kr.uniqWith = function(e, t) {
                            return t = "function" == typeof t ? t : r, e && e.length ? ui(e, r, t) : []
                        }, kr.unset = function(e, t) {
                            return null == e || hi(e, t)
                        }, kr.unzip = ro, kr.unzipWith = no, kr.update = function(e, t, r) {
                            return null == e ? e : li(e, t, vi(r))
                        }, kr.updateWith = function(e, t, n, i) {
                            return i = "function" == typeof i ? i : r, null == e ? e : li(e, t, vi(n), i)
                        }, kr.values = qa, kr.valuesIn = function(e) {
                            return null == e ? [] : Xt(e, xa(e))
                        }, kr.without = io, kr.words = Qa, kr.wrap = function(e, t) {
                            return Lo(vi(t), e)
                        }, kr.xor = so, kr.xorBy = oo, kr.xorWith = ao, kr.zip = co, kr.zipObject = function(e, t) {
                            return gi(e || [], t || [], Zr)
                        }, kr.zipObjectDeep = function(e, t) {
                            return gi(e || [], t || [], Xn)
                        }, kr.zipWith = uo, kr.entries = Ma, kr.entriesIn = ka, kr.extend = wa, kr.extendWith = ba, oc(kr, kr), kr.add = yc, kr.attempt = $a, kr.camelCase = za, kr.capitalize = Ha, kr.ceil = vc, kr.clamp = function(e, t, n) {
                            return n === r && (n = t, t = r), n !== r && (n = (n = ga(n)) === n ? n : 0), t !== r && (t = (t = ga(t)) === t ? t : 0), on(ga(e), t, n)
                        }, kr.clone = function(e) {
                            return an(e, 4)
                        }, kr.cloneDeep = function(e) {
                            return an(e, 5)
                        }, kr.cloneDeepWith = function(e, t) {
                            return an(e, 5, t = "function" == typeof t ? t : r)
                        }, kr.cloneWith = function(e, t) {
                            return an(e, 4, t = "function" == typeof t ? t : r)
                        }, kr.conformsTo = function(e, t) {
                            return null == t || cn(e, t, Ta(t))
                        }, kr.deburr = Va, kr.defaultTo = function(e, t) {
                            return null == e || e !== e ? t : e
                        }, kr.divide = mc, kr.endsWith = function(e, t, n) {
                            e = va(e), t = ci(t);
                            var i = e.length,
                                s = n = n === r ? i : on(fa(n), 0, i);
                            return (n -= t.length) >= 0 && e.slice(n, s) == t
                        }, kr.eq = qo, kr.escape = function(e) {
                            return (e = va(e)) && Y.test(e) ? e.replace(J, nr) : e
                        }, kr.escapeRegExp = function(e) {
                            return (e = va(e)) && ne.test(e) ? e.replace(re, "\\$&") : e
                        }, kr.every = function(e, t, n) {
                            var i = Bo(e) ? Rt : fn;
                            return n && ms(e, t, n) && (t = r), i(e, as(t, 3))
                        }, kr.find = go, kr.findIndex = Hs, kr.findKey = function(e, t) {
                            return qt(e, as(t, 3), wn)
                        }, kr.findLast = yo, kr.findLastIndex = Vs, kr.findLastKey = function(e, t) {
                            return qt(e, as(t, 3), bn)
                        }, kr.floor = wc, kr.forEach = vo, kr.forEachRight = mo, kr.forIn = function(e, t) {
                            return null == e ? e : vn(e, as(t, 3), xa)
                        }, kr.forInRight = function(e, t) {
                            return null == e ? e : mn(e, as(t, 3), xa)
                        }, kr.forOwn = function(e, t) {
                            return e && wn(e, as(t, 3))
                        }, kr.forOwnRight = function(e, t) {
                            return e && bn(e, as(t, 3))
                        }, kr.get = Oa, kr.gt = zo, kr.gte = Ho, kr.has = function(e, t) {
                            return null != e && ds(e, t, Pn)
                        }, kr.hasIn = Pa, kr.head = Fs, kr.identity = rc, kr.includes = function(e, t, r, n) {
                            e = Ko(e) ? e : qa(e), r = r && !n ? fa(r) : 0;
                            var i = e.length;
                            return r < 0 && (r = yr(i + r, 0)), oa(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && Ht(e, t, r) > -1
                        }, kr.indexOf = function(e, t, r) {
                            var n = null == e ? 0 : e.length;
                            if (!n) return -1;
                            var i = null == r ? 0 : fa(r);
                            return i < 0 && (i = yr(n + i, 0)), Ht(e, t, i)
                        }, kr.inRange = function(e, t, n) {
                            return t = pa(t), n === r ? (n = t, t = 0) : n = pa(n),
                                function(e, t, r) {
                                    return e >= vr(t, r) && e < yr(t, r)
                                }(e = ga(e), t, n)
                        }, kr.invoke = Ra, kr.isArguments = Vo, kr.isArray = Bo, kr.isArrayBuffer = Fo, kr.isArrayLike = Ko, kr.isArrayLikeObject = Wo, kr.isBoolean = function(e) {
                            return !0 === e || !1 === e || ea(e) && Sn(e) == m
                        }, kr.isBuffer = Jo, kr.isDate = Go, kr.isElement = function(e) {
                            return ea(e) && 1 === e.nodeType && !na(e)
                        }, kr.isEmpty = function(e) {
                            if (null == e) return !0;
                            if (Ko(e) && (Bo(e) || "string" == typeof e || "function" == typeof e.splice || Jo(e) || ca(e) || Vo(e))) return !e.length;
                            var t = fs(e);
                            if (t == I || t == A) return !e.size;
                            if (Es(e)) return !Dn(e).length;
                            for (var r in e)
                                if (De.call(e, r)) return !1;
                            return !0
                        }, kr.isEqual = function(e, t) {
                            return xn(e, t)
                        }, kr.isEqualWith = function(e, t, n) {
                            var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                            return i === r ? xn(e, t, r, n) : !!i
                        }, kr.isError = Yo, kr.isFinite = function(e) {
                            return "number" == typeof e && kt(e)
                        }, kr.isFunction = Qo, kr.isInteger = $o, kr.isLength = Xo, kr.isMap = ta, kr.isMatch = function(e, t) {
                            return e === t || Cn(e, t, us(t))
                        }, kr.isMatchWith = function(e, t, n) {
                            return n = "function" == typeof n ? n : r, Cn(e, t, us(t), n)
                        }, kr.isNaN = function(e) {
                            return ra(e) && e != +e
                        }, kr.isNative = function(e) {
                            if (_s(e)) throw new Ie("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Un(e)
                        }, kr.isNil = function(e) {
                            return null == e
                        }, kr.isNull = function(e) {
                            return null === e
                        }, kr.isNumber = ra, kr.isObject = Zo, kr.isObjectLike = ea, kr.isPlainObject = na, kr.isRegExp = ia, kr.isSafeInteger = function(e) {
                            return $o(e) && e >= -p && e <= p
                        }, kr.isSet = sa, kr.isString = oa, kr.isSymbol = aa, kr.isTypedArray = ca, kr.isUndefined = function(e) {
                            return e === r
                        }, kr.isWeakMap = function(e) {
                            return ea(e) && fs(e) == x
                        }, kr.isWeakSet = function(e) {
                            return ea(e) && "[object WeakSet]" == Sn(e)
                        }, kr.join = function(e, t) {
                            return null == e ? "" : Wt.call(e, t)
                        }, kr.kebabCase = Ba, kr.last = Gs, kr.lastIndexOf = function(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i;
                            return n !== r && (s = (s = fa(n)) < 0 ? yr(i + s, 0) : vr(s, i - 1)), t === t ? function(e, t, r) {
                                for (var n = r + 1; n--;)
                                    if (e[n] === t) return n;
                                return n
                            }(e, t, s) : zt(e, Bt, s, !0)
                        }, kr.lowerCase = Fa, kr.lowerFirst = Ka, kr.lt = ua, kr.lte = ha, kr.max = function(e) {
                            return e && e.length ? dn(e, rc, On) : r
                        }, kr.maxBy = function(e, t) {
                            return e && e.length ? dn(e, as(t, 2), On) : r
                        }, kr.mean = function(e) {
                            return Ft(e, rc)
                        }, kr.meanBy = function(e, t) {
                            return Ft(e, as(t, 2))
                        }, kr.min = function(e) {
                            return e && e.length ? dn(e, rc, Mn) : r
                        }, kr.minBy = function(e, t) {
                            return e && e.length ? dn(e, as(t, 2), Mn) : r
                        }, kr.stubArray = dc, kr.stubFalse = gc, kr.stubObject = function() {
                            return {}
                        }, kr.stubString = function() {
                            return ""
                        }, kr.stubTrue = function() {
                            return !0
                        }, kr.multiply = bc, kr.nth = function(e, t) {
                            return e && e.length ? Vn(e, fa(t)) : r
                        }, kr.noConflict = function() {
                            return ft._ === this && (ft._ = ze), this
                        }, kr.noop = ac, kr.now = Oo, kr.pad = function(e, t, r) {
                            e = va(e);
                            var n = (t = fa(t)) ? hr(e) : 0;
                            if (!t || n >= t) return e;
                            var i = (t - n) / 2;
                            return Bi(gt(i), r) + e + Bi(dt(i), r)
                        }, kr.padEnd = function(e, t, r) {
                            e = va(e);
                            var n = (t = fa(t)) ? hr(e) : 0;
                            return t && n < t ? e + Bi(t - n, r) : e
                        }, kr.padStart = function(e, t, r) {
                            e = va(e);
                            var n = (t = fa(t)) ? hr(e) : 0;
                            return t && n < t ? Bi(t - n, r) + e : e
                        }, kr.parseInt = function(e, t, r) {
                            return r || null == t ? t = 0 : t && (t = +t), wr(va(e).replace(ie, ""), t || 0)
                        }, kr.random = function(e, t, n) {
                            if (n && "boolean" != typeof n && ms(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = pa(e), t === r ? (t = e, e = 0) : t = pa(t)), e > t) {
                                var i = e;
                                e = t, t = i
                            }
                            if (n || e % 1 || t % 1) {
                                var s = br();
                                return vr(e + s * (t - e + ut("1e-" + ((s + "").length - 1))), t)
                            }
                            return Jn(e, t)
                        }, kr.reduce = function(e, t, r) {
                            var n = Bo(e) ? Dt : Jt,
                                i = arguments.length < 3;
                            return n(e, as(t, 4), r, i, ln)
                        }, kr.reduceRight = function(e, t, r) {
                            var n = Bo(e) ? Lt : Jt,
                                i = arguments.length < 3;
                            return n(e, as(t, 4), r, i, pn)
                        }, kr.repeat = function(e, t, n) {
                            return t = (n ? ms(e, t, n) : t === r) ? 1 : fa(t), Gn(va(e), t)
                        }, kr.replace = function() {
                            var e = arguments,
                                t = va(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }, kr.result = function(e, t, n) {
                            var i = -1,
                                s = (t = mi(t, e)).length;
                            for (s || (s = 1, e = r); ++i < s;) {
                                var o = null == e ? r : e[Ds(t[i])];
                                o === r && (i = s, o = n), e = Qo(o) ? o.call(e) : o
                            }
                            return e
                        }, kr.round = _c, kr.runInContext = e, kr.sample = function(e) {
                            return (Bo(e) ? Yr : Qn)(e)
                        }, kr.size = function(e) {
                            if (null == e) return 0;
                            if (Ko(e)) return oa(e) ? hr(e) : e.length;
                            var t = fs(e);
                            return t == I || t == A ? e.size : Dn(e).length
                        }, kr.snakeCase = Wa, kr.some = function(e, t, n) {
                            var i = Bo(e) ? Mt : ni;
                            return n && ms(e, t, n) && (t = r), i(e, as(t, 3))
                        }, kr.sortedIndex = function(e, t) {
                            return ii(e, t)
                        }, kr.sortedIndexBy = function(e, t, r) {
                            return si(e, t, as(r, 2))
                        }, kr.sortedIndexOf = function(e, t) {
                            var r = null == e ? 0 : e.length;
                            if (r) {
                                var n = ii(e, t);
                                if (n < r && qo(e[n], t)) return n
                            }
                            return -1
                        }, kr.sortedLastIndex = function(e, t) {
                            return ii(e, t, !0)
                        }, kr.sortedLastIndexBy = function(e, t, r) {
                            return si(e, t, as(r, 2), !0)
                        }, kr.sortedLastIndexOf = function(e, t) {
                            if (null == e ? 0 : e.length) {
                                var r = ii(e, t, !0) - 1;
                                if (qo(e[r], t)) return r
                            }
                            return -1
                        }, kr.startCase = Ja, kr.startsWith = function(e, t, r) {
                            return e = va(e), r = null == r ? 0 : on(fa(r), 0, e.length), t = ci(t), e.slice(r, r + t.length) == t
                        }, kr.subtract = Ec, kr.sum = function(e) {
                            return e && e.length ? Gt(e, rc) : 0
                        }, kr.sumBy = function(e, t) {
                            return e && e.length ? Gt(e, as(t, 2)) : 0
                        }, kr.template = function(e, t, n) {
                            var i = kr.templateSettings;
                            n && ms(e, t, n) && (t = r), e = va(e), t = ba({}, t, i, $i);
                            var s, o, a = ba({}, t.imports, i.imports, $i),
                                c = Ta(a),
                                u = Xt(a, c),
                                h = 0,
                                l = t.interpolate || be,
                                p = "__p += '",
                                f = Ne((t.escape || be).source + "|" + l.source + "|" + (l === X ? pe : be).source + "|" + (t.evaluate || be).source + "|$", "g"),
                                d = "//# sourceURL=" + (De.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                            e.replace(f, (function(t, r, n, i, a, c) {
                                return n || (n = i), p += e.slice(h, c).replace(_e, ir), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = c + t.length, t
                            })), p += "';\n";
                            var g = De.call(t, "variable") && t.variable;
                            if (g) {
                                if (he.test(g)) throw new Ie("Invalid `variable` option passed into `_.template`")
                            } else p = "with (obj) {\n" + p + "\n}\n";
                            p = (o ? p.replace(B, "") : p).replace(F, "$1").replace(K, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var y = $a((function() {
                                return Se(c, d + "return " + p).apply(r, u)
                            }));
                            if (y.source = p, Yo(y)) throw y;
                            return y
                        }, kr.times = function(e, t) {
                            if ((e = fa(e)) < 1 || e > p) return [];
                            var r = d,
                                n = vr(e, d);
                            t = as(t), e -= d;
                            for (var i = Yt(n, t); ++r < e;) t(r);
                            return i
                        }, kr.toFinite = pa, kr.toInteger = fa, kr.toLength = da, kr.toLower = function(e) {
                            return va(e).toLowerCase()
                        }, kr.toNumber = ga, kr.toSafeInteger = function(e) {
                            return e ? on(fa(e), -p, p) : 0 === e ? e : 0
                        }, kr.toString = va, kr.toUpper = function(e) {
                            return va(e).toUpperCase()
                        }, kr.trim = function(e, t, n) {
                            if ((e = va(e)) && (n || t === r)) return Qt(e);
                            if (!e || !(t = ci(t))) return e;
                            var i = lr(e),
                                s = lr(t);
                            return bi(i, er(i, s), tr(i, s) + 1).join("")
                        }, kr.trimEnd = function(e, t, n) {
                            if ((e = va(e)) && (n || t === r)) return e.slice(0, pr(e) + 1);
                            if (!e || !(t = ci(t))) return e;
                            var i = lr(e);
                            return bi(i, 0, tr(i, lr(t)) + 1).join("")
                        }, kr.trimStart = function(e, t, n) {
                            if ((e = va(e)) && (n || t === r)) return e.replace(ie, "");
                            if (!e || !(t = ci(t))) return e;
                            var i = lr(e);
                            return bi(i, er(i, lr(t))).join("")
                        }, kr.truncate = function(e, t) {
                            var n = 30,
                                i = "...";
                            if (Zo(t)) {
                                var s = "separator" in t ? t.separator : s;
                                n = "length" in t ? fa(t.length) : n, i = "omission" in t ? ci(t.omission) : i
                            }
                            var o = (e = va(e)).length;
                            if (sr(e)) {
                                var a = lr(e);
                                o = a.length
                            }
                            if (n >= o) return e;
                            var c = n - hr(i);
                            if (c < 1) return i;
                            var u = a ? bi(a, 0, c).join("") : e.slice(0, c);
                            if (s === r) return u + i;
                            if (a && (c += u.length - c), ia(s)) {
                                if (e.slice(c).search(s)) {
                                    var h, l = u;
                                    for (s.global || (s = Ne(s.source, va(fe.exec(s)) + "g")), s.lastIndex = 0; h = s.exec(l);) var p = h.index;
                                    u = u.slice(0, p === r ? c : p)
                                }
                            } else if (e.indexOf(ci(s), c) != c) {
                                var f = u.lastIndexOf(s);
                                f > -1 && (u = u.slice(0, f))
                            }
                            return u + i
                        }, kr.unescape = function(e) {
                            return (e = va(e)) && G.test(e) ? e.replace(W, fr) : e
                        }, kr.uniqueId = function(e) {
                            var t = ++Le;
                            return va(e) + t
                        }, kr.upperCase = Ga, kr.upperFirst = Ya, kr.each = vo, kr.eachRight = mo, kr.first = Fs, oc(kr, function() {
                            var e = {};
                            return wn(kr, (function(t, r) {
                                De.call(kr.prototype, r) || (e[r] = t)
                            })), e
                        }(), {
                            chain: !1
                        }), kr.VERSION = "4.17.21", Nt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                            kr[e].placeholder = kr
                        })), Nt(["drop", "take"], (function(e, t) {
                            Vr.prototype[e] = function(n) {
                                n = n === r ? 1 : yr(fa(n), 0);
                                var i = this.__filtered__ && !t ? new Vr(this) : this.clone();
                                return i.__filtered__ ? i.__takeCount__ = vr(n, i.__takeCount__) : i.__views__.push({
                                    size: vr(n, d),
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, Vr.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        })), Nt(["filter", "map", "takeWhile"], (function(e, t) {
                            var r = t + 1,
                                n = 1 == r || 3 == r;
                            Vr.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: as(e, 3),
                                    type: r
                                }), t.__filtered__ = t.__filtered__ || n, t
                            }
                        })), Nt(["head", "last"], (function(e, t) {
                            var r = "take" + (t ? "Right" : "");
                            Vr.prototype[e] = function() {
                                return this[r](1).value()[0]
                            }
                        })), Nt(["initial", "tail"], (function(e, t) {
                            var r = "drop" + (t ? "" : "Right");
                            Vr.prototype[e] = function() {
                                return this.__filtered__ ? new Vr(this) : this[r](1)
                            }
                        })), Vr.prototype.compact = function() {
                            return this.filter(rc)
                        }, Vr.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, Vr.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, Vr.prototype.invokeMap = Yn((function(e, t) {
                            return "function" == typeof e ? new Vr(this) : this.map((function(r) {
                                return Rn(r, e, t)
                            }))
                        })), Vr.prototype.reject = function(e) {
                            return this.filter(jo(as(e)))
                        }, Vr.prototype.slice = function(e, t) {
                            e = fa(e);
                            var n = this;
                            return n.__filtered__ && (e > 0 || t < 0) ? new Vr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = fa(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                        }, Vr.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, Vr.prototype.toArray = function() {
                            return this.take(d)
                        }, wn(Vr.prototype, (function(e, t) {
                            var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                i = /^(?:head|last)$/.test(t),
                                s = kr[i ? "take" + ("last" == t ? "Right" : "") : t],
                                o = i || /^find/.test(t);
                            s && (kr.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    a = i ? [1] : arguments,
                                    c = t instanceof Vr,
                                    u = a[0],
                                    h = c || Bo(t),
                                    l = function(e) {
                                        var t = s.apply(kr, jt([e], a));
                                        return i && p ? t[0] : t
                                    };
                                h && n && "function" == typeof u && 1 != u.length && (c = h = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    d = o && !p,
                                    g = c && !f;
                                if (!o && h) {
                                    t = g ? t : new Vr(this);
                                    var y = e.apply(t, a);
                                    return y.__actions__.push({
                                        func: lo,
                                        args: [l],
                                        thisArg: r
                                    }), new Hr(y, p)
                                }
                                return d && g ? e.apply(this, a) : (y = this.thru(l), d ? i ? y.value()[0] : y.value() : y)
                            })
                        })), Nt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                            var t = Te[e],
                                r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                n = /^(?:pop|shift)$/.test(e);
                            kr.prototype[e] = function() {
                                var e = arguments;
                                if (n && !this.__chain__) {
                                    var i = this.value();
                                    return t.apply(Bo(i) ? i : [], e)
                                }
                                return this[r]((function(r) {
                                    return t.apply(Bo(r) ? r : [], e)
                                }))
                            }
                        })), wn(Vr.prototype, (function(e, t) {
                            var r = kr[t];
                            if (r) {
                                var n = r.name + "";
                                De.call(Rr, n) || (Rr[n] = []), Rr[n].push({
                                    name: t,
                                    func: r
                                })
                            }
                        })), Rr[qi(r, 2).name] = [{
                            name: "wrapper",
                            func: r
                        }], Vr.prototype.clone = function() {
                            var e = new Vr(this.__wrapped__);
                            return e.__actions__ = Ai(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ai(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ai(this.__views__), e
                        }, Vr.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var e = new Vr(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else(e = this.clone()).__dir__ *= -1;
                            return e
                        }, Vr.prototype.value = function() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                r = Bo(e),
                                n = t < 0,
                                i = r ? e.length : 0,
                                s = function(e, t, r) {
                                    for (var n = -1, i = r.length; ++n < i;) {
                                        var s = r[n],
                                            o = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                e += o;
                                                break;
                                            case "dropRight":
                                                t -= o;
                                                break;
                                            case "take":
                                                t = vr(t, e + o);
                                                break;
                                            case "takeRight":
                                                e = yr(e, t - o)
                                        }
                                    }
                                    return {
                                        start: e,
                                        end: t
                                    }
                                }(0, i, this.__views__),
                                o = s.start,
                                a = s.end,
                                c = a - o,
                                u = n ? a : o - 1,
                                h = this.__iteratees__,
                                l = h.length,
                                p = 0,
                                f = vr(c, this.__takeCount__);
                            if (!r || !n && i == c && f == c) return fi(e, this.__actions__);
                            var d = [];
                            e: for (; c-- && p < f;) {
                                for (var g = -1, y = e[u += t]; ++g < l;) {
                                    var v = h[g],
                                        m = v.iteratee,
                                        w = v.type,
                                        b = m(y);
                                    if (2 == w) y = b;
                                    else if (!b) {
                                        if (1 == w) continue e;
                                        break e
                                    }
                                }
                                d[p++] = y
                            }
                            return d
                        }, kr.prototype.at = po, kr.prototype.chain = function() {
                            return ho(this)
                        }, kr.prototype.commit = function() {
                            return new Hr(this.value(), this.__chain__)
                        }, kr.prototype.next = function() {
                            this.__values__ === r && (this.__values__ = la(this.value()));
                            var e = this.__index__ >= this.__values__.length;
                            return {
                                done: e,
                                value: e ? r : this.__values__[this.__index__++]
                            }
                        }, kr.prototype.plant = function(e) {
                            for (var t, n = this; n instanceof zr;) {
                                var i = Ms(n);
                                i.__index__ = 0, i.__values__ = r, t ? s.__wrapped__ = i : t = i;
                                var s = i;
                                n = n.__wrapped__
                            }
                            return s.__wrapped__ = e, t
                        }, kr.prototype.reverse = function() {
                            var e = this.__wrapped__;
                            if (e instanceof Vr) {
                                var t = e;
                                return this.__actions__.length && (t = new Vr(this)), (t = t.reverse()).__actions__.push({
                                    func: lo,
                                    args: [Xs],
                                    thisArg: r
                                }), new Hr(t, this.__chain__)
                            }
                            return this.thru(Xs)
                        }, kr.prototype.toJSON = kr.prototype.valueOf = kr.prototype.value = function() {
                            return fi(this.__wrapped__, this.__actions__)
                        }, kr.prototype.first = kr.prototype.head, $e && (kr.prototype[$e] = function() {
                            return this
                        }), kr
                    }();
                    gt ? ((gt.exports = dr)._ = dr, dt._ = dr) : ft._ = dr
                }).call(fc)
            }(dc, dc.exports);
            var gc = Object.defineProperty,
                yc = Object.defineProperties,
                vc = Object.getOwnPropertyDescriptors,
                mc = Object.getOwnPropertySymbols,
                wc = Object.prototype.hasOwnProperty,
                bc = Object.prototype.propertyIsEnumerable,
                _c = (e, t, r) => t in e ? gc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Ec = (e, t) => {
                    for (var r in t || (t = {})) wc.call(t, r) && _c(e, r, t[r]);
                    if (mc)
                        for (var r of mc(t)) bc.call(t, r) && _c(e, r, t[r]);
                    return e
                },
                Ic = (e, t) => yc(e, vc(t));

            function Sc(e, t, r) {
                var n;
                const i = $a(e);
                return (null == (n = t.rpcMap) ? void 0 : n[i.reference]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=").concat(i.namespace, ":").concat(i.reference, "&projectId=").concat(r)
            }

            function Oc(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function Pc(e) {
                return e.map((e => "".concat(e.split(":")[0], ":").concat(e.split(":")[1])))
            }

            function Nc() {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const t = Ac(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    r = Ac(e);
                return dc.exports.merge(t, r)
            }

            function Ac(e) {
                var t, r, n, i;
                const s = {};
                if (!ic(e)) return s;
                for (const [o, a] of Object.entries(e)) {
                    const e = Za(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        h = a.rpcMap || {},
                        l = ec(o);
                    s[l] = Ic(Ec(Ec({}, s[l]), a), {
                        chains: Xa(e, null == (t = s[l]) ? void 0 : t.chains),
                        methods: Xa(c, null == (r = s[l]) ? void 0 : r.methods),
                        events: Xa(u, null == (n = s[l]) ? void 0 : n.events),
                        rpcMap: Ec(Ec({}, h), null == (i = s[l]) ? void 0 : i.rpcMap)
                    })
                }
                return s
            }

            function Rc(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function Tc(e) {
                const t = {};
                for (const [r, n] of Object.entries(e)) {
                    const e = n.methods || [],
                        i = n.events || [],
                        s = n.accounts || [],
                        o = Za(r) ? [r] : n.chains ? n.chains : Pc(n.accounts);
                    t[r] = {
                        chains: o,
                        methods: e,
                        events: i,
                        accounts: s
                    }
                }
                return t
            }

            function xc(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : (e = e.includes(":") ? e.split(":")[1] : e, isNaN(Number(e)) ? e : Number(e))
            }
            const Cc = {},
                Uc = e => Cc[e],
                jc = (e, t) => {
                    Cc[e] = t
                };
            class Dc {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(e))
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = Oc(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class Lc {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(pc, "".concat(this.name, ":").concat(e))
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    const r = t || Sc("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new cc(r, Uc("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = parseInt(Oc(t));
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                getHttpProvider() {
                    const e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let n = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    n = n.startsWith("0x") ? n : "0x".concat(n);
                    const i = parseInt(n, 16);
                    if (this.isChainApproved(i)) this.setDefaultChain("".concat(i));
                    else {
                        if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error("Failed to switch to chain 'eip155:".concat(i, "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."));
                        await this.client.request({
                            topic: e.topic,
                            request: {
                                method: e.request.method,
                                params: [{
                                    chainId: n
                                }]
                            },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }), this.setDefaultChain("".concat(i))
                    }
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes("".concat(this.name, ":").concat(e))
                }
            }
            class Mc {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(e))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = Oc(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class kc {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(this.chainId))
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = Oc(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class qc {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(this.chainId))
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        const r = this.getCardanoRPCUrl(t),
                            n = Oc(t);
                        e[n] = this.createHttpProvider(n, r)
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                getCardanoRPCUrl(e) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class zc {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(e))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = Oc(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class Hc {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(pc, "".concat(this.name, ":").concat(e))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        const n = Oc(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                    return new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            class Vc {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = Uc("events"), this.client = Uc("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        const r = t || Sc("".concat(this.name, ":").concat(e), this.namespace);
                        if (!r) throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(pc, "".concat(this.name, ":").concat(this.chainId))
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    })), e
                }
                getHttpProvider() {
                    const e = "".concat(this.name, ":").concat(this.chainId),
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
                setHttpProvider(e, t) {
                    const r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    const r = t || Sc(e, this.namespace);
                    return typeof r > "u" ? void 0 : new hi(new uc(r, Uc("disableProviderPing")))
                }
            }
            var Bc = Object.defineProperty,
                Fc = Object.defineProperties,
                Kc = Object.getOwnPropertyDescriptors,
                Wc = Object.getOwnPropertySymbols,
                Jc = Object.prototype.hasOwnProperty,
                Gc = Object.prototype.propertyIsEnumerable,
                Yc = (e, t, r) => t in e ? Bc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Qc = (e, t) => {
                    for (var r in t || (t = {})) Jc.call(t, r) && Yc(e, r, t[r]);
                    if (Wc)
                        for (var r of Wc(t)) Gc.call(t, r) && Yc(e, r, t[r]);
                    return e
                },
                $c = (e, t) => Fc(e, Kc(t));
            class Xc {
                constructor(e) {
                    this.events = new(m()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Bt.pino)((0, Bt.getDefaultLoggerOptions)({
                        level: (null === e || void 0 === e ? void 0 : e.logger) || hc
                    })), this.disableProviderPing = (null === e || void 0 === e ? void 0 : e.disableProviderPing) || !1
                }
                static async init(e) {
                    const t = new Xc(e);
                    return await t.initialize(), t
                }
                async request(e, t, r) {
                    const [n, i] = this.validateChain(t);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(n).request({
                        request: Qc({}, e),
                        chainId: "".concat(n, ":").concat(i),
                        topic: this.session.topic,
                        expiry: r
                    })
                }
                sendAsync(e, t, r, n) {
                    const i = (new Date).getTime();
                    this.request(e, r, n).then((e => t(null, (0, ui.formatJsonRpcResult)(i, e)))).catch((e => t(e, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: rc("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: r,
                            approval: n
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await n().then((e => {
                            this.session = e;
                            const t = Tc(e.namespaces);
                            this.namespaces = Nc(this.namespaces, t), this.persist("namespaces", this.namespaces)
                        })).catch((e => {
                            if (e.message !== Ra) throw e;
                            t++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        const [r, n] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(n, t)
                    } catch ($t) {
                        if (!/Please call connect/.test($t.message)) throw $t
                    }
                }
                async cleanupPendingPairings() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger.info("Cleaning up inactive pairings...");
                    const t = this.client.pairing.getAll();
                    if (nc(t)) {
                        for (const r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info("Inactive pairings cleared: ".concat(t.length))
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await Ya.init({
                        logger: this.providerOpts.logger || hc,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const e = [...new Set(Object.keys(this.session.namespaces).map((e => ec(e))))];
                    jc("client", this.client), jc("events", this.events), jc("disableProviderPing", this.disableProviderPing), e.forEach((e => {
                        if (!this.session) return;
                        const t = function(e, t) {
                                const r = Object.keys(t.namespaces).filter((t => t.includes(e)));
                                if (!r.length) return [];
                                const n = [];
                                return r.forEach((e => {
                                    const r = t.namespaces[e].accounts;
                                    n.push(...r)
                                })), n
                            }(e, this.session),
                            r = Pc(t),
                            n = Nc(this.namespaces, this.optionalNamespaces),
                            i = $c(Qc({}, n[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new Lc({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new Mc({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new kc({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new Dc({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new qc({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new zc({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new Hc({
                                    namespace: i
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new Vc({
                                    namespace: i
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (e => {
                        this.events.emit("session_ping", e)
                    })), this.client.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            const e = r.data;
                            e && nc(e) && this.events.emit("accountsChanged", e.map(Rc))
                        } else if ("chainChanged" === r.name) {
                            const e = t.chainId,
                                r = t.event.data,
                                n = ec(e),
                                i = xc(e) !== xc(r) ? "".concat(n, ":").concat(xc(r)) : e;
                            this.onChainChanged(i)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    })), this.client.on("session_update", (e => {
                        let {
                            topic: t,
                            params: r
                        } = e;
                        var n;
                        const {
                            namespaces: i
                        } = r, s = null == (n = this.client) ? void 0 : n.session.get(t);
                        this.session = $c(Qc({}, s), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: r
                        })
                    })), this.client.on("session_delete", (async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", $c(Qc({}, rc("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    })), this.on(pc, (e => {
                        this.onChainChanged(e, !0)
                    }))
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw new Error("Provider not found: ".concat(e));
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    }))
                }
                setNamespaces(e) {
                    const {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: n
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = n, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    const [t, r] = (null === e || void 0 === e ? void 0 : e.split(":")) || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map((e => ec(e))).includes(t)) throw new Error("Namespace '".concat(t, "' is not configured. Please call connect() first with namespace config."));
                    if (t && r) return [t, r];
                    const n = ec(Object.keys(this.namespaces)[0]);
                    return [n, this.rpcProviders[n].getDefaultChain()]
                }
                async requestAccounts() {
                    const [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.namespaces) return;
                    const [r, n] = this.validateChain(e);
                    n && (t || this.getProvider(r).setDefaultChain(n), this.namespaces[r] ? this.namespaces[r].defaultChain = n : this.namespaces["".concat(r, ":").concat(n)] ? this.namespaces["".concat(r, ":").concat(n)].defaultChain = n : this.namespaces["".concat(r, ":").concat(n)] = {
                        defaultChain: n
                    }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n))
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem("".concat(lc, "/").concat(e), t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem("".concat(lc, "/").concat(e))
                }
            }
            const Zc = Xc,
                eu = "".concat("wc", "@2:").concat("ethereum_provider", ":"),
                tu = ["eth_sendTransaction", "personal_sign"],
                ru = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                nu = ["chainChanged", "accountsChanged"],
                iu = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var su = Object.defineProperty,
                ou = Object.defineProperties,
                au = Object.getOwnPropertyDescriptors,
                cu = Object.getOwnPropertySymbols,
                uu = Object.prototype.hasOwnProperty,
                hu = Object.prototype.propertyIsEnumerable,
                lu = (e, t, r) => t in e ? su(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                pu = (e, t) => {
                    for (var r in t || (t = {})) uu.call(t, r) && lu(e, r, t[r]);
                    if (cu)
                        for (var r of cu(t)) hu.call(t, r) && lu(e, r, t[r]);
                    return e
                },
                fu = (e, t) => ou(e, au(t));

            function du(e) {
                return Number(e[0].split(":")[1])
            }

            function gu(e) {
                return "0x".concat(e.toString(16))
            }
            class yu {
                constructor() {
                    this.events = new v.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = eu, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    const t = new yu;
                    return await t.initialize(e), t
                }
                async request(e, t) {
                    return await this.signer.request(e, this.formatChainId(this.chainId), t)
                }
                sendAsync(e, t, r) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r)
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    const {
                        required: t,
                        optional: r
                    } = function(e) {
                        const {
                            chains: t,
                            optionalChains: r,
                            methods: n,
                            optionalMethods: i,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!at(t)) throw new Error("Invalid chains");
                        const c = {
                                chains: t,
                                methods: n || tu,
                                events: s || nu,
                                rpcMap: pu({}, t.length ? {
                                    [du(t)]: a[du(t)]
                                } : {})
                            },
                            u = null === s || void 0 === s ? void 0 : s.filter((e => !nu.includes(e))),
                            h = null === n || void 0 === n ? void 0 : n.filter((e => !tu.includes(e)));
                        if (!r && !o && !i && (null == u || !u.length) && (null == h || !h.length)) return {
                            required: t.length ? c : void 0
                        };
                        const l = (null === u || void 0 === u ? void 0 : u.length) && (null === h || void 0 === h ? void 0 : h.length) || !r,
                            p = {
                                chains: [...new Set(l ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != i && i.length ? i : ru))],
                                events: [...new Set(c.events.concat(null != o && o.length ? o : iu))],
                                rpcMap: a
                            };
                        return {
                            required: t.length ? c : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        const n = await new Promise((async (n, i) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((e => {
                                !e.open && !this.signer.session && (this.signer.abortPairingAttempt(), i(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(fu(pu({
                                namespaces: pu({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: null === e || void 0 === e ? void 0 : e.pairingTopic
                            })).then((e => {
                                n(e)
                            })).catch((e => {
                                i(new Error(e.message))
                            }))
                        }));
                        if (!n) return;
                        const i = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            const r = [];
                            return Object.keys(e).forEach((n => {
                                if (t.length && !t.includes(n)) return;
                                const i = e[n];
                                r.push(...i.accounts)
                            })), r
                        }(n.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i), this.setAccounts(i), this.events.emit("connect", {
                            chainId: gu(this.chainId)
                        })
                    } catch (Kt) {
                        throw this.signer.logger.error(Kt), Kt
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    })), this.signer.on("chainChanged", (e => {
                        const t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", gu(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (e => {
                        this.events.emit("session_update", e)
                    })), this.signer.on("session_delete", (e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", fu(pu({}, ot("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    }))
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith("".concat(this.namespace, ":"))
                }
                formatChainId(e) {
                    return "".concat(this.namespace, ":").concat(e)
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    const t = e.filter((e => this.isCompatibleChainId(e))).map((e => this.parseChainId(e)));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", gu(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        const t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    const [t, r, n] = e.split(":");
                    return {
                        chainId: "".concat(t, ":").concat(r),
                        address: n
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter((e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e => this.parseAccountId(e).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    const n = null != (t = null === e || void 0 === e ? void 0 : e.chains) ? t : [],
                        i = null != (r = null === e || void 0 === e ? void 0 : e.optionalChains) ? r : [],
                        s = n.concat(i);
                    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const o = n.length ? (null === e || void 0 === e ? void 0 : e.methods) || tu : [],
                        a = n.length ? (null === e || void 0 === e ? void 0 : e.events) || nu : [],
                        c = (null === e || void 0 === e ? void 0 : e.optionalMethods) || [],
                        u = (null === e || void 0 === e ? void 0 : e.optionalEvents) || [],
                        h = (null === e || void 0 === e ? void 0 : e.rpcMap) || this.buildRpcMap(s, e.projectId),
                        l = (null === e || void 0 === e ? void 0 : e.qrModalOptions) || void 0;
                    return {
                        chains: null === n || void 0 === n ? void 0 : n.map((e => this.formatChainId(e))),
                        optionalChains: i.map((e => this.formatChainId(e))),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: h,
                        showQrModal: !(null == e || !e.showQrModal),
                        qrModalOptions: l,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    const r = {};
                    return e.forEach((e => {
                        r[e] = this.getRpcUrl(e, t)
                    })), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? du(this.rpc.chains) : du(this.rpc.optionalChains), this.signer = await Zc.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            const {
                                WalletConnectModal: t
                            } = await r.e(801).then(r.bind(r, 9801));
                            e = t
                        } catch {
                            throw new Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(pu({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (t) {
                            throw this.signer.logger.error(t), new Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    const {
                        chains: t,
                        optionalChains: r,
                        rpcMap: n
                    } = e;
                    t && at(t) && (this.rpc.chains = t.map((e => this.formatChainId(e))), t.forEach((e => {
                        this.rpc.rpcMap[e] = (null === n || void 0 === n ? void 0 : n[e]) || this.getRpcUrl(e)
                    }))), r && at(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((e => this.formatChainId(e))), r.forEach((e => {
                        this.rpc.rpcMap[e] = (null === n || void 0 === n ? void 0 : n[e]) || this.getRpcUrl(e)
                    })))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(e, "&projectId=").concat(t || this.rpc.projectId)
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const e = await this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId")),
                        t = this.session.namespaces["".concat(this.namespace, ":").concat(e)] ? this.session.namespaces["".concat(this.namespace, ":").concat(e)] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : null === t || void 0 === t ? void 0 : t.accounts), this.setAccounts(null === t || void 0 === t ? void 0 : t.accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e => this.parseAccount(e)))
                }
            }
            const vu = yu
        },
        4437: (e, t, r) => {
            "use strict";
            const n = r(9553)
        },
        6081: (e, t, r) => {
            "use strict";
            const n = r(9971),
                i = r(1195),
                s = r(8793),
                o = r(3638),
                a = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function l(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function p(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function f(e) {
                const t = (e = p(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    const i = "string" === typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" === typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    const i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                                    const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                                };
                            default:
                                return (e, t, r) => {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (const i of Object.keys(n)) {
                    const e = n[i];
                    if ("object" === typeof e && null !== e)
                        for (const r of Object.keys(e)) e[r] = d(e[r], t);
                    else n[i] = d(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const r = n[t];
                    return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
                }), Object.create(null))
            }
            t.extract = f, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const r = r => {
                        return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    const i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                        [u(r, e), t, u(i, e)].join("")
                                    ] : [
                                        [n, u(i, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
                const s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map((r => {
                    const i = e[r];
                    return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(f(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [a]: !0
                }, r);
                const n = p(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query);
                let c = t.stringify(o, r);
                c && (c = "?".concat(c));
                let h = function(e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (h = "#".concat(r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier)), "".concat(n).concat(c).concat(h)
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [a]: !1
                }, n);
                const {
                    url: i,
                    query: s,
                    fragmentIdentifier: c
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: c
                }, n)
            }, t.exclude = (e, r, n) => {
                const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        8767: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n
            });
            class n {}
        },
        7076: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: () => n.H
            });
            var n = r(8767)
        },
        2884: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            const n = r(3485);
            t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        376: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(5632).__exportStar(r(2884), t)
        },
        5638: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            const n = r(5632),
                i = r(6020),
                s = r(3485),
                o = r(2956),
                a = r(376);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new i.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === e || void 0 === e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        const t = new c(e);
                        return yield t.init(), t
                    }))
                }
                init() {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return n.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        7406: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5632);
            n.__exportStar(r(5638), t), n.__exportStar(r(2956), t), n.__exportStar(r(376), t)
        },
        3392: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            const n = r(7076);
            class i extends n.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = i
        },
        2956: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(5632).__exportStar(r(3392), t)
        },
        5789: e => {
            "use strict";
            e.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        6255: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        7566: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            const n = r(5632),
                i = n.__importDefault(r(3973));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), n.__exportStar(r(6255), t), n.__exportStar(r(5039), t)
        },
        5039: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            const n = r(6255);

            function i(e) {
                return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY] || ""
            }

            function s(e, t) {
                return e[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY] = t, e
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY,
                    r = "";
                return r = "undefined" === typeof e.bindings ? i(e, t) : e.bindings().context || "", r
            }

            function a(e, t) {
                const r = o(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY);
                return r.trim() ? "".concat(r, "/").concat(t) : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null === e || void 0 === e ? void 0 : e.level) || n.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = i, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY;
                const i = a(e, t, r);
                return s(e.child({
                    context: i
                }), i, r)
            }
        },
        7306: () => {},
        5860: () => {},
        9367: (e, t, r) => {
            "use strict";
            t.g = void 0;
            const n = r(9553);
            t.g = function() {
                let e, t;
                try {
                    e = n.getDocumentOrThrow(), t = n.getLocationOrThrow()
                } catch (s) {
                    return null
                }

                function r() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    const i = e.getElementsByTagName("meta");
                    for (let e = 0; e < i.length; e++) {
                        const t = i[e],
                            n = ["itemprop", "property", "name"].map((e => t.getAttribute(e))).filter((e => !!e && r.includes(e)));
                        if (n.length && n) {
                            const e = t.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                const i = function() {
                    let t = r("name", "og:site_name", "og:title", "twitter:title");
                    return t || (t = e.title), t
                }();
                return {
                    description: r("description", "og:description", "twitter:description", "keywords"),
                    url: t.origin,
                    icons: function() {
                        const r = e.getElementsByTagName("link"),
                            n = [];
                        for (let e = 0; e < r.length; e++) {
                            const i = r[e],
                                s = i.getAttribute("rel");
                            if (s && s.toLowerCase().indexOf("icon") > -1) {
                                const e = i.getAttribute("href");
                                if (e)
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            const n = t.pathname.split("/");
                                            n.pop();
                                            r += n.join("/") + "/" + e
                                        }
                                        n.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                    const r = t.protocol + e;
                                    n.push(r)
                                } else n.push(e)
                            }
                        }
                        return n
                    }(),
                    name: i
                }
            }
        },
        8639: (e, t, r) => {
            "use strict";
            const n = r(9971),
                i = r(1195),
                s = r(8793),
                o = r(3638),
                a = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function l(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function p(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function f(e) {
                const t = (e = p(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    const i = "string" === typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" === typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    const i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                                    const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                                };
                            default:
                                return (e, t, r) => {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (const i of Object.keys(n)) {
                    const e = n[i];
                    if ("object" === typeof e && null !== e)
                        for (const r of Object.keys(e)) e[r] = d(e[r], t);
                    else n[i] = d(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const r = n[t];
                    return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
                }), Object.create(null))
            }
            t.extract = f, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const r = r => {
                        return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    const i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                        [u(r, e), t, u(i, e)].join("")
                                    ] : [
                                        [n, u(i, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
                const s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map((r => {
                    const i = e[r];
                    return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(f(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [a]: !0
                }, r);
                const n = p(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query);
                let c = t.stringify(o, r);
                c && (c = "?".concat(c));
                let h = function(e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (h = "#".concat(r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier)), "".concat(n).concat(c).concat(h)
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [a]: !1
                }, n);
                const {
                    url: i,
                    query: s,
                    fragmentIdentifier: c
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: c
                }, n)
            }, t.exclude = (e, r, n) => {
                const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        1755: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5632);
            n.__exportStar(r(167), t), n.__exportStar(r(6530), t)
        },
        167: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        6530: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        3485: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5632);
            n.__exportStar(r(7471), t), n.__exportStar(r(366), t), n.__exportStar(r(123), t), n.__exportStar(r(1755), t)
        },
        123: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(5632).__exportStar(r(8864), t)
        },
        8864: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            t.IWatch = class {}
        },
        664: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            const n = r(1755);
            t.toMiliseconds = function(e) {
                return e * n.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / n.ONE_THOUSAND)
            }
        },
        1656: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise((t => {
                    setTimeout((() => {
                        t(!0)
                    }), e)
                }))
            }
        },
        7471: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5632);
            n.__exportStar(r(1656), t), n.__exportStar(r(664), t)
        },
        366: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw new Error("Watch already started for label: ".concat(e));
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    const t = this.get(e);
                    if ("undefined" !== typeof t.elapsed) throw new Error("Watch already stopped for label: ".concat(e));
                    const r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    const t = this.timestamps.get(e);
                    if ("undefined" === typeof t) throw new Error("No timestamp found for label: ".concat(e));
                    return t
                }
                elapsed(e) {
                    const t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
            }
            t.Watch = r, t.default = r
        },
        5037: (e, t, r) => {
            "use strict";
            const n = r(9553)
        },
        5257: (e, t, r) => {
            "use strict";
            const n = r(9971),
                i = r(1195),
                s = r(8793),
                o = r(3638),
                a = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function l(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function p(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function f(e) {
                const t = (e = p(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    const i = "string" === typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" === typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    const i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                                    const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                                };
                            default:
                                return (e, t, r) => {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (const i of Object.keys(n)) {
                    const e = n[i];
                    if ("object" === typeof e && null !== e)
                        for (const r of Object.keys(e)) e[r] = d(e[r], t);
                    else n[i] = d(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const r = n[t];
                    return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
                }), Object.create(null))
            }
            t.extract = f, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const r = r => {
                        return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    const i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                        [u(r, e), t, u(i, e)].join("")
                                    ] : [
                                        [n, u(i, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
                const s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map((r => {
                    const i = e[r];
                    return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(f(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [a]: !0
                }, r);
                const n = p(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query);
                let c = t.stringify(o, r);
                c && (c = "?".concat(c));
                let h = function(e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (h = "#".concat(r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier)), "".concat(n).concat(c).concat(h)
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [a]: !1
                }, n);
                const {
                    url: i,
                    query: s,
                    fragmentIdentifier: c
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: c
                }, n)
            }, t.exclude = (e, r, n) => {
                const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        4734: function(e, t) {
            var r = "undefined" !== typeof self ? self : this,
                n = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            ! function(e) {
                ! function(t) {
                    var r = "URLSearchParams" in e,
                        n = "Symbol" in e && "iterator" in Symbol,
                        i = "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        s = "FormData" in e,
                        o = "ArrayBuffer" in e;
                    if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        c = ArrayBuffer.isView || function(e) {
                            return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function u(e) {
                        if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function h(e) {
                        return "string" !== typeof e && (e = String(e)), e
                    }

                    function l(e) {
                        var t = {
                            next: function() {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return n && (t[Symbol.iterator] = function() {
                            return t
                        }), t
                    }

                    function p(e) {
                        this.map = {}, e instanceof p ? e.forEach((function(e, t) {
                            this.append(t, e)
                        }), this) : Array.isArray(e) ? e.forEach((function(e) {
                            this.append(e[0], e[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                            this.append(t, e[t])
                        }), this)
                    }

                    function f(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function d(e) {
                        return new Promise((function(t, r) {
                            e.onload = function() {
                                t(e.result)
                            }, e.onerror = function() {
                                r(e.error)
                            }
                        }))
                    }

                    function g(e) {
                        var t = new FileReader,
                            r = d(t);
                        return t.readAsArrayBuffer(e), r
                    }

                    function y(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function v() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            var t;
                            this._bodyInit = e, e ? "string" === typeof e ? this._bodyText = e : i && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o && i && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = y(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, i && (this.blob = function() {
                            var e = f(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                        }), this.text = function() {
                            var e = f(this);
                            if (e) return e;
                            if (this._bodyBlob) return function(e) {
                                var t = new FileReader,
                                    r = d(t);
                                return t.readAsText(e), r
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, s && (this.formData = function() {
                            return this.text().then(b)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    p.prototype.append = function(e, t) {
                        e = u(e), t = h(t);
                        var r = this.map[e];
                        this.map[e] = r ? r + ", " + t : t
                    }, p.prototype.delete = function(e) {
                        delete this.map[u(e)]
                    }, p.prototype.get = function(e) {
                        return e = u(e), this.has(e) ? this.map[e] : null
                    }, p.prototype.has = function(e) {
                        return this.map.hasOwnProperty(u(e))
                    }, p.prototype.set = function(e, t) {
                        this.map[u(e)] = h(t)
                    }, p.prototype.forEach = function(e, t) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                    }, p.prototype.keys = function() {
                        var e = [];
                        return this.forEach((function(t, r) {
                            e.push(r)
                        })), l(e)
                    }, p.prototype.values = function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t)
                        })), l(e)
                    }, p.prototype.entries = function() {
                        var e = [];
                        return this.forEach((function(t, r) {
                            e.push([r, t])
                        })), l(e)
                    }, n && (p.prototype[Symbol.iterator] = p.prototype.entries);
                    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function w(e, t) {
                        var r = (t = t || {}).body;
                        if (e instanceof w) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = function(e) {
                                var t = e.toUpperCase();
                                return m.indexOf(t) > -1 ? t : e
                            }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(r)
                    }

                    function b(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach((function(e) {
                            if (e) {
                                var r = e.split("="),
                                    n = r.shift().replace(/\+/g, " "),
                                    i = r.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(n), decodeURIComponent(i))
                            }
                        })), t
                    }

                    function _(e) {
                        var t = new p;
                        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                            var r = e.split(":"),
                                n = r.shift().trim();
                            if (n) {
                                var i = r.join(":").trim();
                                t.append(n, i)
                            }
                        })), t
                    }

                    function E(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    w.prototype.clone = function() {
                        return new w(this, {
                            body: this._bodyInit
                        })
                    }, v.call(w.prototype), v.call(E.prototype), E.prototype.clone = function() {
                        return new E(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new p(this.headers),
                            url: this.url
                        })
                    }, E.error = function() {
                        var e = new E(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var I = [301, 302, 303, 307, 308];
                    E.redirect = function(e, t) {
                        if (-1 === I.indexOf(t)) throw new RangeError("Invalid status code");
                        return new E(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = e.DOMException;
                    try {
                        new t.DOMException
                    } catch (O) {
                        t.DOMException = function(e, t) {
                            this.message = e, this.name = t;
                            var r = Error(e);
                            this.stack = r.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function S(e, r) {
                        return new Promise((function(n, s) {
                            var o = new w(e, r);
                            if (o.signal && o.signal.aborted) return s(new t.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest;

                            function c() {
                                a.abort()
                            }
                            a.onload = function() {
                                var e = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: _(a.getAllResponseHeaders() || "")
                                };
                                e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                                var t = "response" in a ? a.response : a.responseText;
                                n(new E(t, e))
                            }, a.onerror = function() {
                                s(new TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                s(new TypeError("Network request failed"))
                            }, a.onabort = function() {
                                s(new t.DOMException("Aborted", "AbortError"))
                            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && i && (a.responseType = "blob"), o.headers.forEach((function(e, t) {
                                a.setRequestHeader(t, e)
                            })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                                4 === a.readyState && o.signal.removeEventListener("abort", c)
                            }), a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                        }))
                    }
                    S.polyfill = !0, e.fetch || (e.fetch = S, e.Headers = p, e.Request = w, e.Response = E), t.Headers = p, t.Request = w, t.Response = E, t.fetch = S, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }({})
            }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
            var i = n;
            (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        3638: e => {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
                    var o = n[s],
                        a = e[o];
                    (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
                }
                return r
            }
        },
        6210: (e, t, r) => {
            e.exports = self.fetch || (self.fetch = r(929).default || r(929))
        },
        1587: (e, t, r) => {
            e = r.nmd(e);
            var n = "__lodash_hash_undefined__",
                i = 1,
                s = 2,
                o = 9007199254740991,
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object AsyncFunction]",
                h = "[object Boolean]",
                l = "[object Date]",
                p = "[object Error]",
                f = "[object Function]",
                d = "[object GeneratorFunction]",
                g = "[object Map]",
                y = "[object Number]",
                v = "[object Null]",
                m = "[object Object]",
                w = "[object Promise]",
                b = "[object Proxy]",
                _ = "[object RegExp]",
                E = "[object Set]",
                I = "[object String]",
                S = "[object Symbol]",
                O = "[object Undefined]",
                P = "[object WeakMap]",
                N = "[object ArrayBuffer]",
                A = "[object DataView]",
                R = /^\[object .+?Constructor\]$/,
                T = /^(?:0|[1-9]\d*)$/,
                x = {};
            x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, x[a] = x[c] = x[N] = x[h] = x[A] = x[l] = x[p] = x[f] = x[g] = x[y] = x[m] = x[_] = x[E] = x[I] = x[P] = !1;
            var C = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                U = "object" == typeof self && self && self.Object === Object && self,
                j = C || U || Function("return this")(),
                D = t && !t.nodeType && t,
                L = D && e && !e.nodeType && e,
                M = L && L.exports === D,
                k = M && C.process,
                q = function() {
                    try {
                        return k && k.binding && k.binding("util")
                    } catch (e) {}
                }(),
                z = q && q.isTypedArray;

            function H(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }

            function V(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }

            function B(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
            var F, K, W = Array.prototype,
                J = Function.prototype,
                G = Object.prototype,
                Y = j["__core-js_shared__"],
                Q = J.toString,
                $ = G.hasOwnProperty,
                X = function() {
                    var e = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                Z = G.toString,
                ee = RegExp("^" + Q.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                te = M ? j.Buffer : void 0,
                re = j.Symbol,
                ne = j.Uint8Array,
                ie = G.propertyIsEnumerable,
                se = W.splice,
                oe = re ? re.toStringTag : void 0,
                ae = Object.getOwnPropertySymbols,
                ce = te ? te.isBuffer : void 0,
                ue = (F = Object.keys, K = Object, function(e) {
                    return F(K(e))
                }),
                he = ke(j, "DataView"),
                le = ke(j, "Map"),
                pe = ke(j, "Promise"),
                fe = ke(j, "Set"),
                de = ke(j, "WeakMap"),
                ge = ke(Object, "create"),
                ye = Ve(he),
                ve = Ve(le),
                me = Ve(pe),
                we = Ve(fe),
                be = Ve(de),
                _e = re ? re.prototype : void 0,
                Ee = _e ? _e.valueOf : void 0;

            function Ie(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Se(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Oe(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Pe(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new Oe; ++t < r;) this.add(e[t])
            }

            function Ne(e) {
                var t = this.__data__ = new Se(e);
                this.size = t.size
            }

            function Ae(e, t) {
                var r = Ke(e),
                    n = !r && Fe(e),
                    i = !r && !n && We(e),
                    s = !r && !n && !i && $e(e),
                    o = r || n || i || s,
                    a = o ? function(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }(e.length, String) : [],
                    c = a.length;
                for (var u in e) !t && !$.call(e, u) || o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || He(u, c)) || a.push(u);
                return a
            }

            function Re(e, t) {
                for (var r = e.length; r--;)
                    if (Be(e[r][0], t)) return r;
                return -1
            }

            function Te(e) {
                return null == e ? void 0 === e ? O : v : oe && oe in Object(e) ? function(e) {
                    var t = $.call(e, oe),
                        r = e[oe];
                    try {
                        e[oe] = void 0;
                        var n = !0
                    } catch (s) {}
                    var i = Z.call(e);
                    n && (t ? e[oe] = r : delete e[oe]);
                    return i
                }(e) : function(e) {
                    return Z.call(e)
                }(e)
            }

            function xe(e) {
                return Qe(e) && Te(e) == a
            }

            function Ce(e, t, r, n, o) {
                return e === t || (null == e || null == t || !Qe(e) && !Qe(t) ? e !== e && t !== t : function(e, t, r, n, o, u) {
                    var f = Ke(e),
                        d = Ke(t),
                        v = f ? c : ze(e),
                        w = d ? c : ze(t),
                        b = (v = v == a ? m : v) == m,
                        O = (w = w == a ? m : w) == m,
                        P = v == w;
                    if (P && We(e)) {
                        if (!We(t)) return !1;
                        f = !0, b = !1
                    }
                    if (P && !b) return u || (u = new Ne), f || $e(e) ? De(e, t, r, n, o, u) : function(e, t, r, n, o, a, c) {
                        switch (r) {
                            case A:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case N:
                                return !(e.byteLength != t.byteLength || !a(new ne(e), new ne(t)));
                            case h:
                            case l:
                            case y:
                                return Be(+e, +t);
                            case p:
                                return e.name == t.name && e.message == t.message;
                            case _:
                            case I:
                                return e == t + "";
                            case g:
                                var u = V;
                            case E:
                                var f = n & i;
                                if (u || (u = B), e.size != t.size && !f) return !1;
                                var d = c.get(e);
                                if (d) return d == t;
                                n |= s, c.set(e, t);
                                var v = De(u(e), u(t), n, o, a, c);
                                return c.delete(e), v;
                            case S:
                                if (Ee) return Ee.call(e) == Ee.call(t)
                        }
                        return !1
                    }(e, t, v, r, n, o, u);
                    if (!(r & i)) {
                        var R = b && $.call(e, "__wrapped__"),
                            T = O && $.call(t, "__wrapped__");
                        if (R || T) {
                            var x = R ? e.value() : e,
                                C = T ? t.value() : t;
                            return u || (u = new Ne), o(x, C, r, n, u)
                        }
                    }
                    if (!P) return !1;
                    return u || (u = new Ne),
                        function(e, t, r, n, s, o) {
                            var a = r & i,
                                c = Le(e),
                                u = c.length,
                                h = Le(t),
                                l = h.length;
                            if (u != l && !a) return !1;
                            var p = u;
                            for (; p--;) {
                                var f = c[p];
                                if (!(a ? f in t : $.call(t, f))) return !1
                            }
                            var d = o.get(e);
                            if (d && o.get(t)) return d == t;
                            var g = !0;
                            o.set(e, t), o.set(t, e);
                            var y = a;
                            for (; ++p < u;) {
                                var v = e[f = c[p]],
                                    m = t[f];
                                if (n) var w = a ? n(m, v, f, t, e, o) : n(v, m, f, e, t, o);
                                if (!(void 0 === w ? v === m || s(v, m, r, n, o) : w)) {
                                    g = !1;
                                    break
                                }
                                y || (y = "constructor" == f)
                            }
                            if (g && !y) {
                                var b = e.constructor,
                                    _ = t.constructor;
                                b == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (g = !1)
                            }
                            return o.delete(e), o.delete(t), g
                        }(e, t, r, n, o, u)
                }(e, t, r, n, Ce, o))
            }

            function Ue(e) {
                return !(!Ye(e) || function(e) {
                    return !!X && X in e
                }(e)) && (Je(e) ? ee : R).test(Ve(e))
            }

            function je(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            r = "function" == typeof t && t.prototype || G;
                        return e === r
                    }(e)) return ue(e);
                var t = [];
                for (var r in Object(e)) $.call(e, r) && "constructor" != r && t.push(r);
                return t
            }

            function De(e, t, r, n, o, a) {
                var c = r & i,
                    u = e.length,
                    h = t.length;
                if (u != h && !(c && h > u)) return !1;
                var l = a.get(e);
                if (l && a.get(t)) return l == t;
                var p = -1,
                    f = !0,
                    d = r & s ? new Pe : void 0;
                for (a.set(e, t), a.set(t, e); ++p < u;) {
                    var g = e[p],
                        y = t[p];
                    if (n) var v = c ? n(y, g, p, t, e, a) : n(g, y, p, e, t, a);
                    if (void 0 !== v) {
                        if (v) continue;
                        f = !1;
                        break
                    }
                    if (d) {
                        if (!H(t, (function(e, t) {
                                if (i = t, !d.has(i) && (g === e || o(g, e, r, n, a))) return d.push(t);
                                var i
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (g !== y && !o(g, y, r, n, a)) {
                        f = !1;
                        break
                    }
                }
                return a.delete(e), a.delete(t), f
            }

            function Le(e) {
                return function(e, t, r) {
                    var n = t(e);
                    return Ke(e) ? n : function(e, t) {
                        for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                        return e
                    }(n, r(e))
                }(e, Xe, qe)
            }

            function Me(e, t) {
                var r = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function ke(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Ue(r) ? r : void 0
            }
            Ie.prototype.clear = function() {
                this.__data__ = ge ? ge(null) : {}, this.size = 0
            }, Ie.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, Ie.prototype.get = function(e) {
                var t = this.__data__;
                if (ge) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return $.call(t, e) ? t[e] : void 0
            }, Ie.prototype.has = function(e) {
                var t = this.__data__;
                return ge ? void 0 !== t[e] : $.call(t, e)
            }, Ie.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = ge && void 0 === t ? n : t, this
            }, Se.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, Se.prototype.delete = function(e) {
                var t = this.__data__,
                    r = Re(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : se.call(t, r, 1), --this.size, !0)
            }, Se.prototype.get = function(e) {
                var t = this.__data__,
                    r = Re(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, Se.prototype.has = function(e) {
                return Re(this.__data__, e) > -1
            }, Se.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = Re(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            }, Oe.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new Ie,
                    map: new(le || Se),
                    string: new Ie
                }
            }, Oe.prototype.delete = function(e) {
                var t = Me(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, Oe.prototype.get = function(e) {
                return Me(this, e).get(e)
            }, Oe.prototype.has = function(e) {
                return Me(this, e).has(e)
            }, Oe.prototype.set = function(e, t) {
                var r = Me(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            }, Pe.prototype.add = Pe.prototype.push = function(e) {
                return this.__data__.set(e, n), this
            }, Pe.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ne.prototype.clear = function() {
                this.__data__ = new Se, this.size = 0
            }, Ne.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, Ne.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Ne.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ne.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof Se) {
                    var n = r.__data__;
                    if (!le || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new Oe(n)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var qe = ae ? function(e) {
                    return null == e ? [] : (e = Object(e), function(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }(ae(e), (function(t) {
                        return ie.call(e, t)
                    })))
                } : function() {
                    return []
                },
                ze = Te;

            function He(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || T.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Ve(e) {
                if (null != e) {
                    try {
                        return Q.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }

            function Be(e, t) {
                return e === t || e !== e && t !== t
            }(he && ze(new he(new ArrayBuffer(1))) != A || le && ze(new le) != g || pe && ze(pe.resolve()) != w || fe && ze(new fe) != E || de && ze(new de) != P) && (ze = function(e) {
                var t = Te(e),
                    r = t == m ? e.constructor : void 0,
                    n = r ? Ve(r) : "";
                if (n) switch (n) {
                    case ye:
                        return A;
                    case ve:
                        return g;
                    case me:
                        return w;
                    case we:
                        return E;
                    case be:
                        return P
                }
                return t
            });
            var Fe = xe(function() {
                    return arguments
                }()) ? xe : function(e) {
                    return Qe(e) && $.call(e, "callee") && !ie.call(e, "callee")
                },
                Ke = Array.isArray;
            var We = ce || function() {
                return !1
            };

            function Je(e) {
                if (!Ye(e)) return !1;
                var t = Te(e);
                return t == f || t == d || t == u || t == b
            }

            function Ge(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
            }

            function Ye(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Qe(e) {
                return null != e && "object" == typeof e
            }
            var $e = z ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(z) : function(e) {
                return Qe(e) && Ge(e.length) && !!x[Te(e)]
            };

            function Xe(e) {
                return null != (t = e) && Ge(t.length) && !Je(t) ? Ae(e) : je(e);
                var t
            }
            e.exports = function(e, t) {
                return Ce(e, t)
            }
        },
        7456: e => {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, n) {
                var i = n && n.stringify || t;
                if ("object" === typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = new Array(s);
                    o[0] = i(e);
                    for (var a = 1; a < s; a++) o[a] = i(r[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", h = 0, l = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (l = l > -1 ? l : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (h >= c) break;
                                if (null == r[h]) break;
                                l < f && (u += e.slice(l, f)), u += Number(r[h]), l = f + 2, f++;
                                break;
                            case 105:
                                if (h >= c) break;
                                if (null == r[h]) break;
                                l < f && (u += e.slice(l, f)), u += Math.floor(Number(r[h])), l = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (h >= c) break;
                                if (void 0 === r[h]) break;
                                l < f && (u += e.slice(l, f));
                                var d = typeof r[h];
                                if ("string" === d) {
                                    u += "'" + r[h] + "'", l = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[h].name || "<anonymous>", l = f + 2, f++;
                                    break
                                }
                                u += i(r[h]), l = f + 2, f++;
                                break;
                            case 115:
                                if (h >= c) break;
                                l < f && (u += e.slice(l, f)), u += String(r[h]), l = f + 2, f++;
                                break;
                            case 37:
                                l < f && (u += e.slice(l, f)), u += "%", l = f + 2, f++, h--
                        }++h
                    }++f
                }
                if (-1 === l) return e;
                l < p && (u += e.slice(l));
                return u
            }
        },
        929: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return t = t || {}, new Promise((function(r, n) {
                    var i = new XMLHttpRequest,
                        s = [],
                        o = [],
                        a = {},
                        c = function() {
                            return {
                                ok: 2 == (i.status / 100 | 0),
                                statusText: i.statusText,
                                status: i.status,
                                url: i.responseURL,
                                text: function() {
                                    return Promise.resolve(i.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(i.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([i.response]))
                                },
                                clone: c,
                                headers: {
                                    keys: function() {
                                        return s
                                    },
                                    entries: function() {
                                        return o
                                    },
                                    get: function(e) {
                                        return a[e.toLowerCase()]
                                    },
                                    has: function(e) {
                                        return e.toLowerCase() in a
                                    }
                                }
                            }
                        };
                    for (var u in i.open(t.method || "get", e, !0), i.onload = function() {
                            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, r) {
                                s.push(t = t.toLowerCase()), o.push([t, r]), a[t] = a[t] ? a[t] + "," + r : r
                            })), r(c())
                        }, i.onerror = n, i.withCredentials = "include" == t.credentials, t.headers) i.setRequestHeader(u, t.headers[u]);
                    i.send(t.body || null)
                }))
            }
            r.r(t), r.d(t, {
                default: () => n
            })
        },
        3973: (e, t, r) => {
            "use strict";
            const n = r(7456);
            e.exports = o;
            const i = function() {
                    function e(e) {
                        return "undefined" !== typeof e && e
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (t) {
                        return e(self) || e(window) || e(this) || {}
                    }
                }().console || {},
                s = {
                    mapHttpRequest: p,
                    mapHttpResponse: p,
                    wrapRequestSerializer: f,
                    wrapResponseSerializer: f,
                    wrapErrorSerializer: f,
                    req: p,
                    res: p,
                    err: function(e) {
                        const t = {
                            type: e.constructor.name,
                            msg: e.message,
                            stack: e.stack
                        };
                        for (const r in e) void 0 === t[r] && (t[r] = e[r]);
                        return t
                    }
                };

            function o(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" !== typeof t.send) throw Error("pino: transmit option must have a send function");
                const r = e.browser.write || i;
                e.browser.write && (e.browser.asObject = !0);
                const n = e.serializers || {},
                    s = function(e, t) {
                        if (Array.isArray(e)) return e.filter((function(e) {
                            return "!stdSerializers.err" !== e
                        }));
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, n);
                let p = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1);
                "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === e.enabled && (e.level = "silent");
                const f = e.level || "info",
                    g = Object.create(r);
                g.log || (g.log = d), Object.defineProperty(g, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(g, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, a(y, g, "error", "log"), a(y, g, "fatal", "error"), a(y, g, "warn", "error"), a(y, g, "info", "log"), a(y, g, "debug", "log"), a(y, g, "trace", "log")
                    }
                });
                const y = {
                    transmit: t,
                    serialize: s,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: l(e)
                };
                return g.levels = o.levels, g.level = f, g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = d, g.serializers = n, g._serialize = s, g._stdErrSerialize = p, g.child = function(r, i) {
                    if (!r) throw new Error("missing bindings for child Pino");
                    i = i || {}, s && r.serializers && (i.serializers = r.serializers);
                    const o = i.serializers;
                    if (s && o) {
                        var a = Object.assign({}, n, o),
                            l = !0 === e.browser.serialize ? Object.keys(a) : s;
                        delete r.serializers, c([r], l, a, this._stdErrSerialize)
                    }

                    function p(e) {
                        this._childLevel = 1 + (0 | e._childLevel), this.error = u(e, r, "error"), this.fatal = u(e, r, "fatal"), this.warn = u(e, r, "warn"), this.info = u(e, r, "info"), this.debug = u(e, r, "debug"), this.trace = u(e, r, "trace"), a && (this.serializers = a, this._serialize = l), t && (this._logEvent = h([].concat(e._logEvent.bindings, r)))
                    }
                    return p.prototype = this, new p(this)
                }, t && (g._logEvent = h()), g
            }

            function a(e, t, r, s) {
                const a = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? d : a[r] ? a[r] : i[r] || i[s] || d,
                    function(e, t, r) {
                        if (!e.transmit && t[r] === d) return;
                        t[r] = (s = t[r], function() {
                            const a = e.timestamp(),
                                u = new Array(arguments.length),
                                l = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                            for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                            if (e.serialize && !e.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? s.call(l, function(e, t, r, i) {
                                    e._serialize && c(r, e._serialize, e.serializers, e._stdErrSerialize);
                                    const s = r.slice();
                                    let a = s[0];
                                    const u = {};
                                    i && (u.time = i), u.level = o.levels.values[t];
                                    let h = 1 + (0 | e._childLevel);
                                    if (h < 1 && (h = 1), null !== a && "object" === typeof a) {
                                        for (; h-- && "object" === typeof s[0];) Object.assign(u, s.shift());
                                        a = s.length ? n(s.shift(), s) : void 0
                                    } else "string" === typeof a && (a = n(s.shift(), s));
                                    return void 0 !== a && (u.msg = a), u
                                }(this, r, u, a)) : s.apply(l, u), e.transmit) {
                                const n = e.transmit.level || t.level,
                                    i = o.levels.values[n],
                                    s = o.levels.values[r];
                                if (s < i) return;
                                ! function(e, t, r) {
                                    const n = t.send,
                                        i = t.ts,
                                        s = t.methodLevel,
                                        o = t.methodValue,
                                        a = t.val,
                                        u = e._logEvent.bindings;
                                    c(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = i, e._logEvent.messages = r.filter((function(e) {
                                        return -1 === u.indexOf(e)
                                    })), e._logEvent.level.label = s, e._logEvent.level.value = o, n(s, e._logEvent, a), e._logEvent = h(u)
                                }(this, {
                                    ts: a,
                                    methodLevel: r,
                                    methodValue: s,
                                    transmitLevel: n,
                                    transmitValue: o.levels.values[e.transmit.level || t.level],
                                    send: e.transmit.send,
                                    val: t.levelVal
                                }, u)
                            }
                        });
                        var s
                    }(e, t, r)
            }

            function c(e, t, r, n) {
                for (const i in e)
                    if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
                    else if ("object" === typeof e[i] && !Array.isArray(e[i]))
                    for (const n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]))
            }

            function u(e, t, r) {
                return function() {
                    const n = new Array(1 + arguments.length);
                    n[0] = t;
                    for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
                    return e[r].apply(this, n)
                }
            }

            function h(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l(e) {
                return "function" === typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? g : y
            }

            function p() {
                return {}
            }

            function f(e) {
                return e
            }

            function d() {}

            function g() {
                return !1
            }

            function y() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
                nullTime: g,
                epochTime: y,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);