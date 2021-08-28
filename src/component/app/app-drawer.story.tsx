import { Meta, Story } from "@storybook/react";
import AppDrawer from "./app-drawer";
import { actions } from "@storybook/addon-actions";
import { ColorStateProvider } from "../../context/color-state-context";

export default {
  title: "ui",
  component: AppDrawer,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

export const AppDrawerStory: Story = () => (
  <ColorStateProvider>
    <AppDrawer open={true} onClose={() => console.log("close event")} />
  </ColorStateProvider>
);
