import type { Meta, StoryObj } from "@storybook/nextjs";
import RestaurantCard from "./RestaurantCard";

const meta: Meta<typeof RestaurantCard> = {
  title: "Restaurant/RestaurantCard/RestaurantCard",
  component: RestaurantCard,
  args: {
    name: "청파동 제육집",
    distance: 120,
    hashtags: ["혼밥", "가성비", "도보5분"],
    location: "숙명여대 정문 도보 5분",
    likeCount: 12,
    isOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof RestaurantCard>;

export const Closed: Story = {};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
