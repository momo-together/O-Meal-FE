import type { Meta, StoryObj } from "@storybook/nextjs";
import Tabmenu from "./Tabmenu";

const meta: Meta<typeof Tabmenu> = {
  title: "UI/Tabmenu/Tabmenu",
  component: Tabmenu,
};

export default meta;

type Story = StoryObj<typeof Tabmenu>;

export const Default: Story = {
  args: {},
};
