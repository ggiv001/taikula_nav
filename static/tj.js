!(function () {
  "use strict";
  function n(n) {
    return (
      null != n && "object" == typeof n && !0 === n["@@functional/placeholder"]
    );
  }
  function e(e) {
    return function t(r) {
      return 0 === arguments.length || n(r) ? t : e.apply(this, arguments);
    };
  }
  function t(t) {
    return function r(o, u) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return n(o)
            ? r
            : e(function (n) {
                return t(o, n);
              });
        default:
          return n(o) && n(u)
            ? r
            : n(o)
            ? e(function (n) {
                return t(n, u);
              })
            : n(u)
            ? e(function (n) {
                return t(o, n);
              })
            : t(o, u);
      }
    };
  }
  var r,
    o,
    u,
    a,
    c = t(function (n, e) {
      return (null != e && e.constructor === n) || e instanceof n;
    });
  (r = window),
    (u = "https://sugar.uisdc.com/collect"),
    (a = function (n, e) {
      var t = new XMLHttpRequest();
      t.open("POST", n, !0),
        t.setRequestHeader("Content-Type", "application/json"),
        (t.onreadystatechange = function () {
          4 === t.readyState && console.log(t.response);
        }),
        t.send(JSON.stringify(e));
    }),
    (o = function () {
      var n = {
        t: "v",
        u: location.href,
        l: navigator.language || navigator.userLanguage,
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
        r: document.referrer,
      };
      a(u, n);
    }),
    document.addEventListener
      ? document.addEventListener("DOMContentLoaded", o)
      : r.addEventListener("load", o),
    (r.eventTrack = function (n, e) {
      if (c(Number, n) || !(n < 1)) {
        var t = {
          t: "e",
          l: navigator.language || navigator.userLanguage,
          u: location.href,
          e: n,
          i: e,
        };
        a(u, t);
      }
    });
})();
