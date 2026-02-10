import type { Meta, StoryObj } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import AddIcon from "../../../../public/assets/icons/add.svg?react";

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
    Icon: AddIcon,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    isDisabled: true,
    Icon: AddIcon,
  },
};
