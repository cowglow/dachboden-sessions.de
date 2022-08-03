import React from "react";
import { ERROR_UNINITIALIZED_CONTEXT } from "../lib/constants";

// Context;
export interface ColorStateContextProps {
  left: string;
  right: string;
  border: string;
  background: string;
  setColor: (color: string, value: string) => void;
}

const defaultValues: ColorStateContextProps = {
  background: "#000000",
  border: "#ffffff",
  left: "#00ff00",
  right: "#ffff00",
  setColor: () => {
    throw Error(ERROR_UNINITIALIZED_CONTEXT);
  },
};

const ColorStateContext =
  React.createContext<ColorStateContextProps>(defaultValues);

// Provider
interface ColorStateProviderProps {
  children: React.ReactNode;
  defaultValue?: ColorStateContextProps;
}

export const ColorStateProvider: React.FC<ColorStateProviderProps> = ({
  children,
  defaultValue = defaultValues,
}) => {
  const [background, setBackground] = React.useState(defaultValue.background);
  const [border, setBorder] = React.useState(defaultValue.border);
  const [left, setLeft] = React.useState(defaultValue.left);
  const [right, setRight] = React.useState(defaultValue.right);

  const setColor = (color: string, value: string) => {
    switch (color) {
      case "background":
        setBackground(value);
        break;
      case "border":
        setBorder(value);
        break;
      case "left":
        setLeft(value);
        break;
      case "right":
        setRight(value);
        break;
    }
  };

  return (
    <ColorStateContext.Provider
      value={{ background, border, left, right, setColor }}
    >
      {children}
    </ColorStateContext.Provider>
  );
};

// Hook
export const useColorState = () => {
  return React.useContext(ColorStateContext);
};
