import type { Meta, StoryObj } from "@storybook/nextjs";
import RestaurantCard from "./RestaurantCard";

const meta: Meta<typeof RestaurantCard> = {
  title: "mypage/RestaurantCard",
  component: RestaurantCard,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal p-4" style={{ maxWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RestaurantCard>;

export const Default: Story = {
  args: {
    name: "청파동 제육집",
    imageUrl: "https://picsum.photos/400/300",
    href: "/restaurant/1",
  },
};
