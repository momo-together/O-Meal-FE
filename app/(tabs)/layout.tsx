"use client";

import { usePathname } from "next/navigation";
import Tabmenu from "@/components/ui/tabmenu/Tabmenu";
import { ROUTE } from "@/constants/routes";

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const selectedTab = pathname.startsWith(ROUTE.MYPAGE.INDEX) ? "my" : "home";

  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">{children}</main>
      <div className="sticky bottom-0">
        <Tabmenu selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default TabLayout;
