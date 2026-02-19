import Logo from "@/assets/logos/logo.svg";
import AnimateSection from "./AnimateSection";
import SearchSection from "./SearchSection";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center gap-14">
      {/* 로고 */}
      <div className="flex justify-center pt-20">
        <Logo className="h-8 w-auto text-primary-point" aria-label="O-Meal 로고" />
      </div>

      {/* 타이틀 + 검색바 */}
      <div className="flex flex-col gap-2">
        <h1 className="typo-h1-title text-gray-900 mb-3">
          가장 완벽한 점심,
          <br />내 근처에서 찾아요. 🔎
        </h1>
        <SearchSection />
      </div>

      <section aria-label="지금 핫한 폴더" className="flex flex-col gap-2">
        <p className="typo-h2-sub text-gray-900 mb-3 text-center">🔥 지금 핫한 폴더</p>
        <div className="overflow-hidden">
          <AnimateSection />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
