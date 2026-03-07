import Header from "@/components/layout/header/Header";
import RestaurantInfoSection from "./_components/restaurantInfo/RestaurantInfoSection";
import RestaurantTabMenu from "./_components/restaurantTabMenu/RestaurantTabMenu";

// TODO: API 연동 시 params.id로 식당 데이터 조회로 교체
const MOCK_RESTAURANT = {
  name: "청파동 제육집",
  images: [
    "https://picsum.photos/seed/r1/240/132",
    "https://picsum.photos/seed/r2/240/132",
    "https://picsum.photos/seed/r3/240/132",
  ],
  hashtags: ["가성비", "혼밥"],
  address: "서울특별시 용산구 청파로 47길 12",
  businessHours: "영업시간 10:00~22:00",
  isLiked: false,
};

const RestaurantDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header title="식당 상세 정보" />
      <RestaurantInfoSection restaurant={MOCK_RESTAURANT} />
      <RestaurantTabMenu />
      {children}
    </>
  );
};

export default RestaurantDetailLayout;
