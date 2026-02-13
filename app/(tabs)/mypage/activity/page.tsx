import Header from "@/components/layout/header/Header";
import ActivityCard from "../_components/activityCard/ActivityCard";

const MOCK_ACTIVITIES = [
  {
    type: "위키 수정 제안",
    restaurantName: "청파동 제육집",
    content: "사장님 고향 방문으로 24일 하루 휴무입니다.",
    date: "2024.03.18",
  },
  {
    type: "리뷰 작성",
    restaurantName: "일식당 무무",
    content: "연어 덮밥이 정말 신선해요! 추천합니다.",
    date: "2024.03.12",
  },
];

const ActivityPage = () => {
  const activities = MOCK_ACTIVITIES;

  return (
    <>
      <Header title="내 활동 내역" />

      <section className="px-4 py-6" aria-label="내 활동 내역 목록">
        <h2 className="typo-h2-sub">내 활동 내역</h2>

        <div className="mt-4 flex flex-col gap-3">
          {activities.map((activity) => (
            <ActivityCard
              key={`${activity.restaurantName}-${activity.date}`}
              type={activity.type}
              restaurantName={activity.restaurantName}
              content={activity.content}
              date={activity.date}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ActivityPage;
