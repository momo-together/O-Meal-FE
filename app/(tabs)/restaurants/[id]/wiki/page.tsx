import WikiViewer from "@/components/specific/wiki/WikiViewer";

const MOCK_SECTIONS = [
  {
    title: "1. 영업 시간 및 휴무",
    content: "평일 11:00~20:00 (브레이크 타임 15:00~17:00)",
  },
  {
    title: "2. 꿀팁 및 TMI",
    content: `- 밥 무한리필 가능. 제육 소스 조금 더 달라고 해서 비벼먹으면 극락임.
- 혼밥석은 창가 쪽에 4자리 있음. **혼밥 난이도 최하.**
- 결제 시 계좌이체 하면 계란 후라이를 서비스로 주신다.
- 사장님 피셜: 재료 소진 시 조기 마감될 수 있으니 저녁엔 일찍 가는 것을 추천함.`,
  },
];

const WikiPage = () => {
  return (
    <div className="py-6">
      <WikiViewer sections={MOCK_SECTIONS} />
    </div>
  );
};

export default WikiPage;
