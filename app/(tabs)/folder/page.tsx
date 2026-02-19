import AddIcon from "@/assets/icons/add.svg";
import Header from "@/components/layout/header/Header";
import FloatingButton from "@/components/ui/button/floatingButton/FloatingButton";
import { ROUTE } from "@/constants/routes";
import Folder from "./_components/folder/Folder";
import SearchSection from "./SearchSection";

// TODO: 서버 데이터 연결
const HASHTAGS = ["가성비", "혼밥", "영업중", "분위기 맛집", "혼술", "데이트", "배달", "회식", "점심특선", "신규"];

// TODO: 서버 데이터 연결
const FOLDERS = [
  {
    emoji: "🌙",
    title: "혼밥 성지",
    description: "눈치 안보고 즐기는 1인 식당 모음",
    savedCount: 12,
    viewCount: 12,
  },
  {
    emoji: "🍺",
    title: "낮술 환영",
    description: "공강 시간에 즐기는 시원한 반주 한 잔",
    savedCount: 5,
    viewCount: 11,
  },
  {
    emoji: "🍰",
    title: "당충전 디저트",
    description: "공부하기 좋고 비주얼도 완벽한 카페",
    savedCount: 24,
    viewCount: 2,
  },
];

const RestaurantsPage = () => {
  return (
    <>
      <Header title="숙명여자대학교" fallbackRoute={ROUTE.HOME} />
      <div className="flex flex-col gap-8 px-5 pt-4 pb-40">
        <SearchSection hashtags={HASHTAGS} />
        <section aria-label="테마별 맛집 폴더">
          <h2 className="typo-h1-title text-primary-text mb-5">테마별 맛집 폴더</h2>
          <div className="flex flex-col gap-4">
            {FOLDERS.map((folder) => (
              <Folder key={folder.title} {...folder} />
            ))}
          </div>
        </section>
      </div>
      <FloatingButton variant="primaryIcon" location="right" isDisabled={false}>
        <AddIcon />
      </FloatingButton>
    </>
  );
};

export default RestaurantsPage;
