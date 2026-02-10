import clsx from "clsx";
import HomeIcon from "@/assets/icons/home.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";

type TabmenuType = "home" | "my";

type TabInfoType = {
  name: TabmenuType;
  label: string;
  icon: React.ReactElement;
};

const tabInfo: TabInfoType[] = [
  { name: "home", label: "홈", icon: <HomeIcon /> },
  { name: "my", label: "MY", icon: <UserIcon /> },
];

interface TabmenuProps {
  isSelectedTab: TabmenuType;
}

const Tabmenu = ({ isSelectedTab }: TabmenuProps) => {
  return (
    <div
      role="menu"
      className="flex w-100 bg-bg-white justify-between py-3 px-10"
    >
      {tabInfo.map((info) => (
        <button
          key={info.name}
          type="button"
          className={clsx(
            "flex flex-col items-center justify-center w-fit [&_svg]:w-5",
            isSelectedTab === info.name ? "text-primary-point" : "text-gray-900"
          )}
        >
          {info.icon}
          <span className="typo-body2 font-suit"> {info.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabmenu;
