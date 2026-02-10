import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./Button";
import LikeIcon from "@/assets/icons/like.svg?react";

const meta: Meta<typeof Button> = {
  title: "UI/Button/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Button {...args}>
      <LikeIcon />
    </Button>
  ),
};
