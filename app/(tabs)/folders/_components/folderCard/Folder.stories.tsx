import type { Meta, StoryObj } from "@storybook/nextjs";
import FolderCard from "./FolderCard";

const meta: Meta<typeof FolderCard> = {
  title: "Restaurant/Folder/Folder",
  component: FolderCard,
  decorators: [
    (Story) => (
      <div className="bg-bg-oatmeal p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FolderCard>;

export const Default: Story = {
  args: {
    emoji: "🍚",
    title: "혼밥 성지",
    description: "눈치 안보고 즐기는 1인 식당 모음",
    savedCount: 12,
    viewCount: 12,
  },
};

export const LongDescription: Story = {
  args: {
    emoji: "🍚",
    title: "혼밥 성지",
    description:
      "눈치 안보고 즐기는 1인 식당 모음 눈치 안보고 즐기는 1인 식당 모음눈치 안보고 즐기는 1인 식당 모음눈치 안보고 즐기는 1인 식당 모음눈치 안보고 즐기는 1인 식당 모음",
    savedCount: 12,
    viewCount: 12,
  },
};
