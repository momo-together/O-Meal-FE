import type { Meta, StoryObj } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import AddIcon from "@/assets/icons/add.svg";

const meta: Meta<typeof FloatingButton> = {
  title: "UI/Button/FloatingButton",
  component: FloatingButton,
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    variant: "primary",
    isDisabled: false,
    location: "left",
  },
  render: (args) => (
    <FloatingButton {...args}>
      <AddIcon />
    </FloatingButton>
  ),
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    isDisabled: true,
    location: "mid",
  },
  render: (args) => (
    <FloatingButton {...args}>
      <AddIcon />
    </FloatingButton>
  ),
};
