import ArrowLeft from "@/assets/icons/arrow-left.svg";

interface HeaderProps {
  /** 헤더 중앙에 표시될 페이지 제목 */
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="relative flex py-2 w-full items-center bg-bg-oatmeal">
      <button type="button" aria-label="뒤로 가기" className="absolute left-4 flex items-center justify-center p-1">
        <ArrowLeft aria-hidden="true" className="h-4 w-4 text-gray-900" />
      </button>
      <h1 className="typo-body1 mx-auto text-primary-text user-select">{title}</h1>
    </header>
  );
};

export default Header;
