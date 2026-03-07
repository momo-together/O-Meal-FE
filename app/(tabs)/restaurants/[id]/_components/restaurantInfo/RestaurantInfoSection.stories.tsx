import type { Meta, StoryObj } from "@storybook/nextjs";
import RestaurantInfoSection from "./RestaurantInfoSection";

const meta: Meta<typeof RestaurantInfoSection> = {
  title: "Restaurant/restaurantInfo/RestaurantInfoSection",
  component: RestaurantInfoSection,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal px-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RestaurantInfoSection>;

const mockRestaurant = {
  name: "청파동 제육집",
  images: [
    "https://picsum.photos/seed/r1/240/132",
    "https://picsum.photos/seed/r2/240/132",
    "https://picsum.photos/seed/r3/240/132",
  ],
  hashtags: ["#가성비", "#혼밥"],
  address: "서울특별시 용산구 청파로 47길 12",
  businessHours: "영업시간 10:00~22:00",
  isLiked: false,
};

export const Default: Story = {
  args: {
    restaurant: mockRestaurant,
  },
};

export const Liked: Story = {
  args: {
    restaurant: { ...mockRestaurant, isLiked: true },
  },
};

export const NoImages: Story = {
  args: {
    restaurant: { ...mockRestaurant, images: [] },
  },
};
