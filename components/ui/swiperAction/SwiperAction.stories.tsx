import type { Meta, StoryObj } from "@storybook/nextjs";
import SwiperAction from "./SwiperAction";

const meta: Meta<typeof SwiperAction> = {
  title: "UI/SwiperAction/SwiperAction",
  component: SwiperAction,
};

export default meta;
type Story = StoryObj<typeof SwiperAction>;

const cards = ["🍜 라멘", "🍕 피자", "🌮 타코", "🍣 스시", "🥗 샐러드"];

const SlideCard = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center h-40 rounded-2xl bg-bg-white text-gray-900 typo-h1-title shadow-sm w-80">{label}</div>
);

const defaultElements = cards.map((label) => <SlideCard key={label} label={label} />);
const singleElement = [<SlideCard key="single" label="🍜 라멘" />];

export const Default: Story = {
  render: (args) => <SwiperAction {...args} swiperElement={defaultElements} />,
};

export const WithSidePeek: Story = {
  render: (args) => <SwiperAction {...args} swiperElement={defaultElements} />,
  args: {
    sidePeekRatio: 0.06,
  },
};

export const SingleSlide: Story = {
  render: (args) => <SwiperAction {...args} swiperElement={singleElement} />,
};
