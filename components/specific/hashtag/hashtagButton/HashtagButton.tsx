import clsx from "clsx";

interface HashtagButtonProps {
  isSelected: boolean;
  text: string;
}

const HashtagButton = ({ isSelected, text }: HashtagButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "bg-bg-white inline-flex py-1 px-6 justify-center items-center rounded-full select-none",
        isSelected ? "border border-primary-point" : "border border-gray-300",
      )}
    >
      <span className={clsx(isSelected ? "text-primary-point" : "text-gray-500")}>{text}</span>
    </button>
  );
};

export default HashtagButton;
