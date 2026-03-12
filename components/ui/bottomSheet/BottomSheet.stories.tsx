import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import BottomSheet from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "UI/BottomSheet/BottomSheet",
  component: BottomSheet,
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    // biome-ignore lint/correctness/useHookAtTopLevel: 스토리 render 함수에서 훅 사용
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative h-[600px] bg-bg-oatmeal">
        <button
          type="button"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-point px-6 py-3 typo-button text-white"
          onClick={() => setIsOpen(true)}
        >
          바텀시트 열기
        </button>
        <BottomSheet isOpen={isOpen} toggleOpen={() => setIsOpen((prev) => !prev)}>
          <div className="px-5 pb-8 pt-2">
            <h2 className="typo-h2-sub mb-4 text-center text-primary-text">바텀시트 제목</h2>
            <p className="typo-body2 text-secondary-subtext">바텀시트 내용이 여기에 들어갑니다. children으로 원하는 컨텐츠를 넣을 수 있습니다.</p>
          </div>
        </BottomSheet>
      </div>
    );
  },
};

export const WithLongContent: Story = {
  render: () => {
    // biome-ignore lint/correctness/useHookAtTopLevel: 스토리 render 함수에서 훅 사용
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative h-[600px] bg-bg-oatmeal">
        <button
          type="button"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-point px-6 py-3 typo-button text-white"
          onClick={() => setIsOpen(true)}
        >
          긴 컨텐츠 바텀시트 열기
        </button>
        <BottomSheet isOpen={isOpen} toggleOpen={() => setIsOpen((prev) => !prev)}>
          <div className="px-5 pb-8 pt-2">
            <h2 className="typo-h2-sub mb-6 text-center text-primary-text">새 폴더 만들기</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="typo-body1 text-primary-text">폴더 이름</label>
                <div className="flex h-[52px] items-center rounded-xl border border-gray-200 px-4">
                  <span className="typo-body2 text-secondary-subtext">예: 비 오는 날 파전 맛집</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="typo-body1 text-primary-text">짧은 설명</label>
                <div className="flex h-[52px] items-center rounded-xl border border-gray-200 px-4">
                  <span className="typo-body2 text-secondary-subtext">예: 막걸리 필수, 웨이팅 감수!</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-full rounded-full bg-primary-point py-[14px] typo-button text-white shadow-[0px_4px_12px_0px_var(--color-shadow)]"
              >
                폴더 생성하기
              </button>
            </div>
          </div>
        </BottomSheet>
      </div>
    );
  },
};
