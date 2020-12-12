import React from "react";

export interface DbsLogoProps {
  colorLeft: string;
  colorRight: string;
  colorBorder: string;
  colorBackground: string;
}

const DbsLogo: React.FC<DbsLogoProps> = ({
  colorLeft,
  colorRight,
  colorBorder,
  colorBackground,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    width="100%"
    height="100%"
  >
    <g id="background">
      <path
        fill={colorBackground}
        d="M500.839 23.577H99.16c-41.744 0-75.585 33.84-75.585 75.585v401.677c0 41.744 33.841 75.585 75.585 75.585H500.84c41.744 0 75.585-33.841 75.585-75.585V99.162c0-41.745-33.841-75.585-75.585-75.585"
      />
    </g>
    <g id="B">
      <path
        d="M260.958 79.531h182.958c61.307 0 76.449 38.46 76.213 74.338-.108 16.383.243 114.207.243 114.207-2.577 9.414-17.22 30.077-36.355 31.035l.246.305c.53.657 1.219.824 1.915.851 2.778.108 29.567 20.2 34.194 30.19l.027 154.066c-4.631 14.704-20.186 32.694-36.672 33.9-15.604 1.14-21.33 0-39.811 0H260.958z"
        fill={colorRight}
        stroke={colorBorder}
        strokeWidth={8}
        strokeMiterlimit={10}
      />
      <path
        d="M388.1 336.682h-6.63v77.099h6.63zM388.1 186.1h-6.63v77.099h6.63z"
        fill={colorBorder}
      />
    </g>
    <g id="D">
      <path
        d="M82.601 520.469h111.647c30.536 0 55.898-6.161 76.102-18.484 20.195-12.322 36.336-28.755 48.428-49.29 12.085-20.542 20.591-43.954 25.526-70.235 4.928-26.291 7.396-53.4 7.396-81.327 0-31.22-3.102-60.283-9.304-87.181-6.203-26.906-15.827-50.212-28.866-69.93-13.047-19.714-29.508-35.223-49.383-46.516-19.883-11.301-43.5-16.943-70.853-16.943H82.601z"
        fill={colorLeft}
        stroke={colorBorder}
        strokeWidth={8}
        strokeMiterlimit={10}
      />
      <path d="M207.569 224.65h-7.143v149.947h7.143z" fill={colorBorder} />
    </g>
  </svg>
);

export default DbsLogo;
