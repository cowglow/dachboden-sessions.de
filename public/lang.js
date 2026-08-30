// Client-side language routing for a static site (no server to read
// Accept-Language). German lives at the root, English under /en. Runs as a
// render-blocking <head> script so any redirect happens before first paint.
//
//   - an explicit choice (from the EN|DE toggle, stored in localStorage) always wins
//   - otherwise navigator.languages decides, once — the redirected page then
//     already matches, so it settles in a single hop
(function () {
    "use strict";
    try {
        var path = location.pathname;
        var onEn = path === "/en" || path.indexOf("/en/") === 0;

        var want = null;
        try {
            var stored = localStorage.getItem("db-lang");
            if (stored === "en" || stored === "de") want = stored;
        } catch (e) {}

        if (!want) {
            var list =
                navigator.languages && navigator.languages.length
                    ? navigator.languages
                    : [navigator.language || ""];
            for (var i = 0; i < list.length; i++) {
                var tag = String(list[i]).toLowerCase();
                if (tag.indexOf("de") === 0) {
                    want = "de";
                    break;
                }
                if (tag.indexOf("en") === 0) {
                    want = "en";
                    break;
                }
            }
            if (!want) want = "de";
        }

        if (want === "en" && !onEn) {
            location.replace(
                "/en" +
                    (path === "/" ? "" : path) +
                    location.search +
                    location.hash
            );
        } else if (want === "de" && onEn) {
            location.replace(
                (path.slice(3) || "/") + location.search + location.hash
            );
        }
    } catch (e) {
        /* leave the visitor where they are */
    }
})();
