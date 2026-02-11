import clsx from "clsx";
import HomeIcon from "@/assets/icons/home.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import Link from "next/link";

type TabmenuType = "home" | "my";

type TabInfoType = {
  name: TabmenuType;
  label: string;
  icon: React.ReactElement;
  url: string;
};

const tabInfo: TabInfoType[] = [
  { name: "home", label: "홈", icon: <HomeIcon />, url: "/" },
  { name: "my", label: "MY", icon: <UserIcon />, url: "/" },
];

interface TabmenuProps {
  isSelectedTab: TabmenuType;
}

const Tabmenu = ({ isSelectedTab }: TabmenuProps) => {
  return (
    <div
      role="tablist"
      className="flex w-full bg-bg-white justify-between py-3 px-10"
    >
      {tabInfo.map((info) => (
        <Link
          href={info.url}
          key={info.name}
          className={clsx(
            "flex flex-col items-center justify-center w-fit [&_svg]:w-5",
            isSelectedTab === info.name ? "text-primary-point" : "text-gray-900"
          )}
        >
          {info.icon}
          <span className="typo-body2 font-suit"> {info.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Tabmenu;
