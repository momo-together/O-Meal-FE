import type { Meta, StoryObj } from "@storybook/nextjs";
import ImageGrid from "./ImageGrid";

const meta: Meta<typeof ImageGrid> = {
  title: "UI/ImageGrid/ImageGrid",
  component: ImageGrid,
};

export default meta;
type Story = StoryObj<typeof ImageGrid>;

const sampleImages = [
  { src: "https://picsum.photos/seed/1/200/200", alt: "음식 이미지 1" },
  { src: "https://picsum.photos/seed/2/200/200", alt: "음식 이미지 2" },
  { src: "https://picsum.photos/seed/3/200/200", alt: "음식 이미지 3" },
  { src: "https://picsum.photos/seed/4/200/200", alt: "음식 이미지 4" },
  { src: "https://picsum.photos/seed/5/200/200", alt: "음식 이미지 5" },
  { src: "https://picsum.photos/seed/6/200/200", alt: "음식 이미지 6" },
  { src: "https://picsum.photos/seed/7/200/200", alt: "음식 이미지 1" },
  { src: "https://picsum.photos/seed/8/200/200", alt: "음식 이미지 2" },
  { src: "https://picsum.photos/seed/9/200/200", alt: "음식 이미지 3" },
];

export const Default: Story = {
  args: {
    imageInfos: sampleImages,
  },
};

export const ThreeImages: Story = {
  args: {
    imageInfos: sampleImages.slice(0, 3),
  },
};

export const OneImage: Story = {
  args: {
    imageInfos: sampleImages.slice(0, 1),
  },
};
