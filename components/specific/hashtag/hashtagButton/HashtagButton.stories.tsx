import type { Meta, StoryObj } from "@storybook/nextjs";
import HashtagButton from "./HashtagButton";

const meta: Meta<typeof HashtagButton> = {
  title: "Specific/Hashtag/HashtagButton/HashtagButton",
  component: HashtagButton,
};

export default meta;
type Story = StoryObj<typeof HashtagButton>;

export const Default: Story = {
  args: {
    isSelected: false,
    text: "해시태그",
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    text: "처음",
  },
};
