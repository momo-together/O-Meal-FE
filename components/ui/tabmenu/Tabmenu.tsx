import HomeIcon from "@/assets/icons/home.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";

const Tabmenu = () => {
  return (
    <div
      role="menu"
      className="flex w-100 bg-bg-white justify-between py-3 px-6 [&_svg]:w-4 [&_svg]:h-4"
    >
      <button
        type="button"
        className="flex flex-col items-center justify-center w-fit typo-body2"
      >
        <HomeIcon />
        <span>홈</span>
      </button>

      <button
        type="button"
        className="flex flex-col items-center justify-center w-fit typo-body2"
      >
        <UserIcon />
        <span>MY</span>
      </button>
    </div>
  );
};

export default Tabmenu;
