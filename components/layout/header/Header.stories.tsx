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

export const WithFallbackRoute: Story = {
  args: {
    title: "식당 상세",
    fallbackRoute: "/",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/restaurant/1",
        query: {},
      },
    },
  },
};

/**
 * 스크롤 숨김/노출 동작을 확인하려면 스토리 내에서 스크롤을 시도하세요.
 * - 아래로 스크롤: 헤더 숨김
 * - 위로 스크롤: 헤더 노출
 * - 최상단: 항상 노출
 */
export const ScrollBehavior: Story = {
  args: {
    title: "스크롤 테스트",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200vh", paddingTop: "0" }}>
        <Story />
        <div className="p-4 mt-4 space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: 스토리용 더미 컨텐츠
            <div key={i} className="h-12 bg-gray-100 rounded flex items-center justify-center">
              스크롤 컨텐츠 {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
        query: {},
      },
    },
  },
};
