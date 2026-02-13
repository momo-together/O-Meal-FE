import type { Meta, StoryObj } from "@storybook/nextjs";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "input value",
    onChange: () => {},
    placeholder: "입력해 주세요",
    isError: false,
  },
};

export const Disabled: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "입력해 주세요",
    disabled: true,
    isError: false,
  },
};

export const ErrorState: Story = {
  args: {
    value: "에러 발생",
    onChange: () => {},
    placeholder: "입력해 주세요",
    isError: true,
  },
};
