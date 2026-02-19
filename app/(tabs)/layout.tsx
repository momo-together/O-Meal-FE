import Tabmenu from "@/components/ui/tabmenu/Tabmenu";

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">{children}</main>
      <div className="sticky bottom-0 left-0 -mx-4">
        <Tabmenu />
      </div>
    </div>
  );
};

export default TabLayout;
