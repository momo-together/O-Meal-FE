import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "layout/Header/Header",
  component: Header,
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
        query: {},
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "숙명여자대학교",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
        query: {},
      },
    },
  },
};
