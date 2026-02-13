import type { Meta, StoryObj } from "@storybook/nextjs";
import ImageInput from "./ImageInput";

const meta: Meta<typeof ImageInput> = {
  title: "UI/Input/ImageInput",
  component: ImageInput,
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    defaultImage: "https://loremflickr.com/100/100",
  },
};

export const WithErrorImage: Story = {
  args: {
    defaultImage: "/존재하지않음",
  },
};
