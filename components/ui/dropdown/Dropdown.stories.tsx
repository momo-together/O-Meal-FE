import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import BottomSheet from "@/components/ui/bottomSheet/BottomSheet";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Sort: Story = {
  args: {
    label: "거리순",
    variant: "sort",
  },
};

export const WithBottomSheet: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative h-[400px] bg-bg-oatmeal p-4">
        <Dropdown label="거리순" onClick={() => setIsOpen(true)} />
        <BottomSheet isOpen={isOpen} toggleOpen={() => setIsOpen((prev) => !prev)}>
          <div className="px-5 pb-8 pt-2">
            <h2 className="typo-h2-sub mb-4 text-center text-primary-text">정렬 기준</h2>
            <ul className="flex flex-col gap-3">
              {["거리순", "평점순", "최신순"].map((option) => (
                <li key={option}>
                  <button type="button" className="w-full rounded-xl py-3 text-left typo-body1 text-primary-text" onClick={() => setIsOpen(false)}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </BottomSheet>
      </div>
    );
  },
};
