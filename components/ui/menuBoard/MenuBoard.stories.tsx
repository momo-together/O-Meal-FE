import type { Meta, StoryObj } from "@storybook/nextjs";
import MenuBoard from "./MenuBoard";

const meta: Meta<typeof MenuBoard> = {
  title: "components/ui/menuBoard/MenuBoard",
  component: MenuBoard,
};

export default meta;
type Story = StoryObj<typeof MenuBoard>;

export const Default: Story = {
  args: {
    menus: [
      { name: "직화 제육볶음", price: 9000 },
      { name: "치즈 김치찜", price: 9500 },
      { name: "수제 떡갈비 정식", price: 11000 },
      { name: "계란찜 추가", price: 3000 },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    menus: [{ name: "오늘의 정식", price: 8500 }],
  },
};
