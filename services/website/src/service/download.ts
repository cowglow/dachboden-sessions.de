import { createElement } from "react";
import DsbLogo from "../component/dsb-logo/dsb-logo";
import { renderToStaticMarkup } from "react-dom/server";

type PrintPalette = {
  left: string;
  right: string;
  border: string;
  background: string;
};

const createSvgElement = (palette: PrintPalette) => {
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
  return new Blob([preface, svgMarkup], {
    type: "image/svg+xml;charset=utf-8",
  });
};

const width = 1080;
const height = 1080;

const getFileName = (ext: string) => {
  return `db-logo-${Date.now()}.${ext}`;
};

const downloadFile = (href: string, ext: string) => {
  let downloadLink = document.createElement("a");
  downloadLink.href = href;
  downloadLink.download = getFileName(ext);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const downloadPng = (palette: PrintPalette) => {
  const svgElement = createSvgElement(palette);
  const svgUrl = URL.createObjectURL(svgElement);
  let image = new Image();
  image.onload = () => {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    if (context) {
      context.drawImage(image, 0, 0, width, height);
    }

    downloadFile(canvas.toDataURL(), "png");
  };

  image.src = svgUrl;
};

export const downloadSvg = (palette: PrintPalette) => {
  const svgElement = createSvgElement(palette);
  const svgUrl = URL.createObjectURL(svgElement);
  downloadFile(svgUrl, "svg");
};
