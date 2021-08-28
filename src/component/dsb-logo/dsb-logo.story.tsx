import React from "react";
import { Meta, Story } from "@storybook/react";
import DbsLogo, { DbsLogoProps } from "./dsb-logo";
import { randomColors as defaultColors } from "../hoc-dbs-logo/hoc-dbs-logo";

export default {
  title: "components/dbs-logo",
  component: DbsLogo,
  argTypes: {
    colorLeft: { name: "Left Color", control: "color" },
    colorRight: { name: "Right Color", control: "color" },
    colorBackground: { name: "Background Color", control: "color" },
    colorBorder: { name: "Border Color", control: "color" },
  },
} as Meta;

export const DbsLogoStory: Story<DbsLogoProps> = ({
  colorLeft = defaultColors.colorLeft,
  colorRight = defaultColors.colorRight,
  colorBackground = defaultColors.colorBackground,
  colorBorder = defaultColors.colorBorder,
}) => (
  <DbsLogo
    colorLeft={colorLeft}
    colorRight={colorRight}
    colorBackground={colorBackground}
    colorBorder={colorBorder}
  />
);

DbsLogoStory.storyName = "dbs-logo";
