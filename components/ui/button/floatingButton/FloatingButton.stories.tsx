import type { Meta, StoryObj } from "@storybook/nextjs";
import AddIcon from "@/assets/icons/add.svg";
import FloatingButton from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "UI/Button/FloatingButton",
  component: FloatingButton,
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    variant: "primaryIcon",
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
    variant: "primaryIcon",
    isDisabled: true,
    location: "mid",
  },
  render: (args) => (
    <FloatingButton {...args}>
      <AddIcon />
    </FloatingButton>
  ),
};

export const Text: Story = {
  args: {
    variant: "primary",
    isDisabled: false,
    location: "mid",
  },
  render: (args) => (
    <FloatingButton {...args}>
      <AddIcon />
      길찾기
    </FloatingButton>
  ),
};
