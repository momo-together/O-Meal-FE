import type { Meta, StoryObj } from "@storybook/nextjs";
import LabeledInput from "./LabeledInput";

const meta: Meta<typeof LabeledInput> = {
  title: "UI/Input/LabeledInput",
  component: LabeledInput,
};

export default meta;
type Story = StoryObj<typeof LabeledInput>;

export const Default: Story = {
  args: {
    id: "test",
    label: "닉네임",
    value: "input value",
    onChange: () => {},
    placeholder: "닉네임을 입력해 주세요",
  },
};

export const ErrorState: Story = {
  args: {
    id: "test",
    label: "닉네임",
    value: "input value",
    onChange: () => {},
    placeholder: "닉네임을 입력해 주세요",
    errorMessage: "닉네임은 공백일 수 없습니다.",
  },
};

export const Disabled: Story = {
  args: {
    id: "test",
    label: "닉네임",
    value: "input value",
    onChange: () => {},
    placeholder: "닉네임을 입력해 주세요",
    disabled: true,
  },
};
