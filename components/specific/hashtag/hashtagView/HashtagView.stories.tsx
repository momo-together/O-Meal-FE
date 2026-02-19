import type { Meta, StoryObj } from "@storybook/nextjs";
import HashtagView from "./HashtagView";

const meta: Meta<typeof HashtagView> = {
  title: "Specific/HashtagView/HashtagView",
  component: HashtagView,
};

export default meta;
type Story = StoryObj<typeof HashtagView>;

export const Default: Story = {
  args: {
    text: "가성비",
  },
};

export const LongText: Story = {
  args: {
    text: "가성비가성비가성비가성비가성비가성비가성비가성비가성비가성비",
  },
};
