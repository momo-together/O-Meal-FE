interface MenuInfo {
  /** 메뉴 이름 */
  name: string;
  /** 메뉴 가격 (원 단위) */
  price: number;
}

interface MenuBoardProps {
  /** 표시할 메뉴 목록 */
  menus: MenuInfo[];
}

/**
 * 메뉴판 컴포넌트
 * @param menus - 메뉴 이름과 가격 배열
 */
const MenuBoard = ({ menus }: MenuBoardProps) => {
  return (
    <ul className="flex w-full flex-col text-primary-text" role="list" aria-label="메뉴판">
      {menus.map((menu) => (
        <li key={menu.name} className="flex items-center justify-between px-5 py-1">
          <span className="typo-body2">{menu.name}</span>
          <span className="typo-body1 text-right">{menu.price.toLocaleString("ko-KR")}원</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuBoard;
