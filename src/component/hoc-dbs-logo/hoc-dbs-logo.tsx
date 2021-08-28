import React from "react";
import DbsLogo, { DbsLogoProps } from "../dsb-logo/dsb-logo";
import { colors } from "../../lib/colors";
import { useColorState } from "../../context/color-state-context";

interface HocDbsLogoProps {
  randomPlay: boolean;
}

export const randomColors = {
  colorLeft: colors[Math.floor(Math.random() * colors.length)],
  colorRight: colors[Math.floor(Math.random() * colors.length)],
  colorBackground: colors[Math.floor(Math.random() * colors.length)],
  colorBorder: colors[Math.floor(Math.random() * colors.length)],
};

const HocDbsLogo: React.FC<HocDbsLogoProps> = ({ randomPlay = true }) => {
  const { left, right, background, border } = useColorState();

  const [colorProps, setColorProps] = React.useState<DbsLogoProps>({
    colorLeft: left,
    colorRight: right,
    colorBackground: background,
    colorBorder: border,
  });

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        setColorProps({
          colorLeft: colors[Math.floor(Math.random() * colors.length)],
          colorRight: colors[Math.floor(Math.random() * colors.length)],
          colorBackground: colors[Math.floor(Math.random() * colors.length)],
          colorBorder: colors[Math.floor(Math.random() * colors.length)],
        });
      },
      randomPlay ? 1000 : 900000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DbsLogo
      colorLeft={left}
      colorRight={right}
      colorBackground={background}
      colorBorder={border}
    />
  );
};

export default HocDbsLogo;
