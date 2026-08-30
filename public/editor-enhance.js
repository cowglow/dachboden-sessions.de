// Progressive enhancement for /editor: turns the static logo preview into an
// interactive recolour + download tool, wires the "Edit these colours" buttons
// on the colourway cards, and adds a PNG download for each colourway. Without
// this script the page still shows the preview and the SVG colourway downloads.
(function () {
    "use strict";

    var HEX = /^#[0-9a-fA-F]{6}$/;

    function fillOf(svg, sel) {
        var el = svg && svg.querySelector(sel);
        return el ? el.getAttribute("fill") || "" : "";
    }

    function serialize(svgEl) {
        var clone = svgEl.cloneNode(true);
        clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        return '<?xml version="1.0" encoding="UTF-8"?>\n' + clone.outerHTML;
    }

    function triggerDownload(href, name) {
        var a = document.createElement("a");
        a.href = href;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function downloadSvg(svgEl, name) {
        var blob = new Blob([serialize(svgEl)], {
            type: "image/svg+xml;charset=utf-8",
        });
        var url = URL.createObjectURL(blob);
        triggerDownload(url, name);
        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    function downloadPng(svgEl, name) {
        var src =
            "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent(serialize(svgEl));
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = 1080;
            canvas.height = 1080;
            var ctx = canvas.getContext("2d");
            if (ctx) ctx.drawImage(img, 0, 0, 1080, 1080);
            triggerDownload(canvas.toDataURL("image/png"), name);
        };
        img.src = src;
    }

    function pngNameFromCard(card) {
        var link = card && card.querySelector("a[download]");
        var href = link ? link.getAttribute("href") || "" : "";
        var base = href.split("/").pop() || "db-logo.svg";
        return base.replace(/\.svg$/i, ".png");
    }

    // DsbLogo markup: <g id="background">1 path</g>,
    // <g id="B">fill, border, border</g>, <g id="D">fill, border, border</g>
    var SEL = {
        background: "#background path",
        left: "#D > path:nth-of-type(1)",
        right: "#B > path:nth-of-type(1)",
        border: "#B > path:nth-of-type(n+2), #D > path:nth-of-type(n+2)",
    };

    function run() {
        // Colourway PNG buttons work with or without the editor panel present.
        var pngButtons = document.querySelectorAll("[data-download-png]");
        for (var p = 0; p < pngButtons.length; p++) {
            (function (btn) {
                if (btn.dataset.wired) return;
                btn.dataset.wired = "1";
                btn.hidden = false;
                btn.addEventListener("click", function () {
                    var card = btn.closest("li");
                    var svgEl = card && card.querySelector("svg");
                    if (svgEl) downloadPng(svgEl, pngNameFromCard(card));
                });
            })(pngButtons[p]);
        }

        var root = document.querySelector("[data-editor]");
        if (!root || root.dataset.enhanced) return;
        var svg = root.querySelector("svg");
        if (!svg) return;
        root.dataset.enhanced = "1";

        var groups = {};
        Object.keys(SEL).forEach(function (part) {
            groups[part] = svg.querySelectorAll(SEL[part]);
        });
        function apply(part, value) {
            var nodes = groups[part];
            if (!nodes) return;
            for (var i = 0; i < nodes.length; i++) nodes[i].setAttribute("fill", value);
        }

        var inputs = root.querySelectorAll('input[type="color"][data-part]');
        function setInput(part, value) {
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].getAttribute("data-part") !== part) continue;
                if (HEX.test(value)) inputs[i].value = value;
            }
            apply(part, value);
        }
        for (var i = 0; i < inputs.length; i++) {
            (function (input) {
                var part = input.getAttribute("data-part");
                apply(part, input.value);
                input.addEventListener("input", function () {
                    apply(part, input.value);
                });
            })(inputs[i]);
        }

        // "Edit these colours" on each colourway card -> load it into the editor.
        var loaders = document.querySelectorAll("[data-load-preset]");
        for (var j = 0; j < loaders.length; j++) {
            (function (btn) {
                btn.hidden = false;
                btn.addEventListener("click", function () {
                    var card = btn.closest("li");
                    var psvg = card && card.querySelector("svg");
                    if (!psvg) return;
                    setInput("background", fillOf(psvg, SEL.background));
                    setInput("left", fillOf(psvg, SEL.left));
                    setInput("right", fillOf(psvg, SEL.right));
                    setInput("border", fillOf(psvg, "#D > path:nth-of-type(2)"));
                    if (root.scrollIntoView) {
                        root.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            })(loaders[j]);
        }

        var svgBtn = root.querySelector('[data-download="svg"]');
        if (svgBtn) {
            svgBtn.addEventListener("click", function () {
                downloadSvg(svg, "db-logo.svg");
            });
        }
        var pngBtn = root.querySelector('[data-download="png"]');
        if (pngBtn) {
            pngBtn.addEventListener("click", function () {
                downloadPng(svg, "db-logo.png");
            });
        }

        // Only reveal the interactive panel once wiring succeeded.
        root.hidden = false;
    }

    run();
    if (typeof window !== "undefined") window.__dbEnhanceEditor = run;
})();
