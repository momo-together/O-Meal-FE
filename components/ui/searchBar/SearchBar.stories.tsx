import type { Meta, StoryObj } from "@storybook/nextjs";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "UI/SearchBar/SearchBar",
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력해 주세요.",
    onChange: () => {},
  },
};
