import Header from "@/components/layout/header/Header";
import HashtagButton from "@/components/specific/hashtag/hashtagButton/HashtagButton";
import { ROUTE } from "@/constants/routes";
import RestaurantCard from "../_components/restaurantCard/RestaurantCard";

interface RestaurantData {
  id: string;
  name: string;
  imageUrl?: string;
  distance: number;
  hashtags: string[];
  location: string;
  likeCount: number;
  isOpen: boolean;
}

// TODO: 서버 데이터 연결
const MOCK_RESTAURANTS: RestaurantData[] = [
  {
    id: "1",
    name: "청파동 제육집",
    distance: 120,
    hashtags: ["혼밥", "가성비"],
    location: "숙명여대 정문 도보 5분",
    likeCount: 12,
    isOpen: true,
  },
  {
    id: "2",
    name: "청파동 순대국",
    distance: 200,
    hashtags: ["혼밥", "한식"],
    location: "숙명여대 후문 도보 3분",
    likeCount: 8,
    isOpen: false,
  },
  {
    id: "3",
    name: "숙대 김밥천국",
    distance: 50,
    hashtags: ["가성비", "혼밥"],
    location: "숙명여대 정문 1분",
    likeCount: 24,
    isOpen: true,
  },
  {
    id: "4",
    name: "청파 돈까스",
    distance: 350,
    hashtags: ["혼밥", "일식"],
    location: "효창공원역 도보 5분",
    likeCount: 15,
    isOpen: true,
  },
];

// TODO: 서버 데이터 연결
const MOCK_FOLDERS: Record<string, { emoji: string; title: string }> = {
  "1": { emoji: "🌙", title: "혼밥 성지" },
  "2": { emoji: "🍺", title: "낮술 환영" },
  "3": { emoji: "🍰", title: "당충전 디저트" },
};

interface FolderRestaurantListPageProps {
  params: Promise<{ id: string }>;
}

const FolderRestaurantListPage = async ({ params }: FolderRestaurantListPageProps) => {
  const { id } = await params;
  const folder = MOCK_FOLDERS[id] ?? { emoji: "📁", title: "폴더" };

  return (
    <>
      <Header title={`${folder.emoji} ${folder.title}`} fallbackRoute={ROUTE.FOLDER.INDEX} />
      <div className="flex flex-col gap-6 pb-40">
        <div className="flex items-center gap-2">
          {/* TODO: [SortDropdown] - 거리순 정렬 드롭다운 구현 필요 */}
          <div className="h-8 w-24 border border-dashed border-gray-200 rounded-full flex items-center justify-center typo-caption text-gray-400" aria-hidden="true">
            거리순
          </div>
          <HashtagButton text="영업중" isSelected={false} />
        </div>

        {/* 식당 목록 */}
        <ul className="flex flex-col gap-4" aria-label="식당 목록">
          {MOCK_RESTAURANTS.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard {...restaurant} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FolderRestaurantListPage;
