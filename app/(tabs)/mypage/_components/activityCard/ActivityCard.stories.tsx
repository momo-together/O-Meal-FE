import type { Meta, StoryObj } from "@storybook/nextjs";
import ActivityCard from "./ActivityCard";

const meta: Meta<typeof ActivityCard> = {
  title: "mypage/ActivityCard",
  component: ActivityCard,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ActivityCard>;

export const Default: Story = {
  args: {
    type: "리뷰 작성",
    restaurantName: "일식당 무무",
    content:
      "연어 덮밥이 정말 신선해요! 추천합니다.연어 덮밥이 정말 신선해요! 추천합니다.연어 덮밥이 정말 신선해요! 추천합니다.연어 덮밥이 정말 신선해요! 추천합니다.연어 덮밥이 정말 신선해요! 추천합니다.",
    date: "2024.03.12",
  },
};
