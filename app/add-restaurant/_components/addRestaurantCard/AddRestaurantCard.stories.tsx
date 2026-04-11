import type { Meta, StoryObj } from "@storybook/nextjs";
import AddRestaurantCard from "./AddRestaurantCard";

const meta: Meta<typeof AddRestaurantCard> = {
  title: "add-restaurant/AddRestaurantCard",
  component: AddRestaurantCard,
};

export default meta;

type Story = StoryObj<typeof AddRestaurantCard>;

export const Default: Story = {
  args: {
    title: "일식당 무무",
    location: "서울 용산구 청파로 47길 12",
    category: "일식",
    onClick: () => {},
  },
};

export const Korean: Story = {
  args: {
    title: "한정식 가온",
    location: "서울 마포구 와우산로 29길 8",
    category: "한식",
    onClick: () => {},
  },
};

export const Western: Story = {
  args: {
    title: "비스트로 르블랑",
    location: "서울 강남구 테헤란로 152",
    category: "양식",
    onClick: () => {},
  },
};

export const LongText: Story = {
  args: {
    title: "이름이 긴 맛집의 대표주자 식당",
    location: "서울 강남구 강남대로 396 강남아크로타워 1층",
    category: "기타",
    onClick: () => {},
  },
};
