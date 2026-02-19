import type { Meta, StoryObj } from "@storybook/nextjs";
import RestaurantTabMenu from "./RestaurantTabMenu";

const meta: Meta<typeof RestaurantTabMenu> = {
  title: "Restaurant/RestaurantTabMenu/RestaurantTabMenu",
  component: RestaurantTabMenu,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/restaurant/123/info",
        segments: ["info"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RestaurantTabMenu>;

export const Default: Story = {};
