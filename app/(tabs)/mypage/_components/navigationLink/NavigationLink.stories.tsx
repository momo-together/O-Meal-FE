import type { Meta, StoryObj } from "@storybook/nextjs";
import LikeIcon from "@/assets/icons/like.svg";
import NavigationLink from "./NavigationLink";

const meta: Meta<typeof NavigationLink> = {
  title: "Mypage/NavigationLink",
  component: NavigationLink,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
  args: {
    name: "찜한 맛집",
    navigateUrl: "/",
    Icon: LikeIcon,
  },
};
