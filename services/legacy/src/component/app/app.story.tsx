import React from "react";
import { Meta, Story } from "@storybook/react";
import App from "./app";
import { ColorStateProvider } from "../../context/color-state-context";

export default {
  title: "components/app",
  component: App,
} as Meta;

export const AppStory: Story = () => (
  <ColorStateProvider>
    <App />
  </ColorStateProvider>
);

AppStory.storyName = "app";
