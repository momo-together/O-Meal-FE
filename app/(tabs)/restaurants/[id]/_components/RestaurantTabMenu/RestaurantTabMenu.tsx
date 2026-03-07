"use client";

import Link from "next/link";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { ROUTE } from "@/constants/routes";

interface TabInfoType {
  name: string;
  label: string;
  url: string;
}

const getTabInfo = (id: string): TabInfoType[] => [
  { name: "info", label: "정보", url: ROUTE.RESTAURANT.INFO(id) },
  { name: "wiki", label: "위키", url: ROUTE.RESTAURANT.WIKI(id) },
  { name: "photo", label: "사진", url: ROUTE.RESTAURANT.PHOTO(id) },
];

const RestaurantTabMenu = () => {
  const { id } = useParams<{ id: string }>();
  const segment = useSelectedLayoutSegment();
  const tabInfos = getTabInfo(id);
  const activeIndex = tabInfos.findIndex((tab) => tab.name === segment);

  return (
    <nav className="relative w-full flex bg-bg-oatmeal border-b border-gray-200" aria-label="식당 탭 메뉴">
      {tabInfos.map((tab) => (
        <Link
          key={tab.name}
          href={tab.url}
          className="flex flex-1 items-center justify-center py-5 typo-button-sm text-gray-900"
          aria-current={segment === tab.name ? "page" : undefined}
        >
          {tab.label}
        </Link>
      ))}
      <div
        className="absolute bottom-0 h-0.5 bg-primary-point transition-transform duration-200"
        style={{ width: `${100 / tabInfos.length}%`, transform: `translateX(${activeIndex * 100}%)` }}
      />
    </nav>
  );
};

export default RestaurantTabMenu;
