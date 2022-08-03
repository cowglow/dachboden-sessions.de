import { createElement } from "react";
import DsbLogo from "../component/dsb-logo/dsb-logo";
import { renderToStaticMarkup } from "react-dom/server";

type PrintPalette = {
  left: string;
  right: string;
  border: string;
  background: string;
};
export const download = (palette: PrintPalette) => {
  const svgElement = createElement(
    DsbLogo,
    {
      colorLeft: palette.left,
      colorRight: palette.right,
      colorBorder: palette.border,
      colorBackground: palette.background,
    },
    null
  );

  const svgMarkup = renderToStaticMarkup(svgElement);
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgMarkup], {
    type: "image/svg+xml;charset=utf-8",
  });
  const svgUrl = URL.createObjectURL(svgBlob);
  let downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `db-logo=${Date.now()}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
