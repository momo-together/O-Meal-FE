import type { Meta, StoryObj } from "@storybook/nextjs";
import LikeIcon from "@/assets/icons/like.svg";
import Button from "./Button";

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

export const Text: Story = {
  render: (args) => <Button {...args}>로그아웃</Button>,
};
