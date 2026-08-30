// Re-rolls the header logo's colours on every page load. The prerendered site
// ships no other runtime, so without this the mark just keeps its baked-in
// palette. Exposes window.__dbRandomizeLogo so the React dev render can trigger
// it after the SVG mounts.
(function () {
    "use strict";

    // DsbLogo markup: <g id="background">1 path</g>,
    // <g id="B">fill, border, border</g>, <g id="D">fill, border, border</g>
    var SEL = {
        background: "#background path",
        left: "#D > path:nth-of-type(1)",
        right: "#B > path:nth-of-type(1)",
        border: "#B > path:nth-of-type(n+2), #D > path:nth-of-type(n+2)",
    };

    function hsl(h, s, l) {
        return (
            "hsl(" +
            Math.round(((h % 360) + 360) % 360) +
            " " +
            Math.round(s) +
            "% " +
            Math.round(l) +
            "%)"
        );
    }

    // Random base hue -> dark background, two bright letters, near-white border.
    function roll() {
        var base = Math.random() * 360;
        var accent = base + 90 + Math.random() * 180;
        return {
            background: hsl(base, 25 + Math.random() * 25, 9 + Math.random() * 7),
            left: hsl(
                base + 20 + Math.random() * 30,
                70 + Math.random() * 25,
                50 + Math.random() * 12
            ),
            right: hsl(accent, 70 + Math.random() * 25, 52 + Math.random() * 12),
            border: hsl(base, 12 + Math.random() * 16, 88 + Math.random() * 8),
        };
    }

    function paint() {
        var host = document.querySelector("[data-random-logo]");
        var svg = host && host.querySelector("svg");
        if (!svg) return;
        var colours = roll();
        Object.keys(SEL).forEach(function (part) {
            var nodes = svg.querySelectorAll(SEL[part]);
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].setAttribute("fill", colours[part]);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", paint);
    } else {
        paint();
    }
    if (typeof window !== "undefined") window.__dbRandomizeLogo = paint;
})();
