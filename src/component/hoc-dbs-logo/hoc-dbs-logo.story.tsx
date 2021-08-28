import React from "react";
import { Meta } from "@storybook/react";
import HocDbsLogo from "./hoc-dbs-logo";

export default {
  title: "components/randomized-dbs-logo",
  component: HocDbsLogo,
  options: { showPanel: false },
} as Meta;

export const HocDbsLogoStory = () => <HocDbsLogo randomPlay={true} />;

HocDbsLogoStory.storyName = "randomized-dbs-logo";
