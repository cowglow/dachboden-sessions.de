import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DsbLogo from "src/component/dsb-logo/dsb-logo";

// The header mark. It renders with the palette below, then /logo-randomize.js
// re-rolls the SVG fills to a fresh random colourway. On the prerendered site
// every route change is a full page load, so that runs on its own; under the
// `yarn dev` client router the header stays mounted, so re-kick it whenever the
// route changes.
const RandomizedDbsLogo: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const w = window as unknown as { __dbRandomizeLogo?: () => void };
        w.__dbRandomizeLogo?.();
    }, [pathname]);

    return (
        <DsbLogo
            colorBackground="#14161c"
            colorLeft="#12d97a"
            colorRight="#ffd24a"
            colorBorder="#f2f3f7"
        />
    );
};

export default RandomizedDbsLogo;
