!(function (e, t) {
  var d = "createElement",
    n = "getElementsByTagName",
    a = "setAttribute",
    c = document.getElementById(e);
  c && c.parentNode && c.parentNode.removeChild(c),
    (c = (c = document[d + "NS"] && document.documentElement.namespaceURI)
      ? document[d + "NS"](c, "script")
      : document[d]("script"))[a]("id", e),
    c[a]("src", t),
    (document[n]("head")[0] || document[n]("body")[0]).appendChild(c);
})(
  "altmetric-embed-js",
  "https://d1bxh8uas1mnw7.cloudfront.net/assets/altmetric_badges-26c2366af6fbe8409157ffb0e7a7fe7cd193aa7c285b244ea05f846de0b1dfd3.js",
);
