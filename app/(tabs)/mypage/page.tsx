import EditIcon from "@/assets/icons/edit.svg";
import LikeIcon from "@/assets/icons/like.svg";
import SettingIcon from "@/assets/icons/setting.svg";
import Header from "@/components/layout/header/Header";
import Button from "@/components/ui/button/button/Button";
import { ROUTE } from "@/constants/routes";
import NavigationLink from "./_components/navigationLink/NavigationLink";
import ProfileImage from "./_components/profileImage/ProfileImage";

const navigationInfo = [
  {
    name: "찜한 맛집",
    Icon: LikeIcon,
    navigateUrl: ROUTE.MYPAGE.FAVORITES,
  },
  {
    name: "내 활동 (리뷰/위키)",
    Icon: EditIcon,
    navigateUrl: ROUTE.MYPAGE.ACTIVITY,
  },
  {
    name: "프로필 정보 수정",
    Icon: SettingIcon,
    navigateUrl: ROUTE.MYPAGE.PROFILE,
  },
];

// TODO : mockData 서버 데이터 연결
const mockData = {
  name: "오밀오밀",
  school: "숙명여대",
  profileImageUrl: "/",
};

const MyPage = () => {
  return (
    <>
      <Header title="마이 페이지" />

      <section className="flex flex-col items-center gap-2 py-8" aria-label="프로필 정보">
        <ProfileImage src={mockData.profileImageUrl} />
        <h2 className="typo-body1">{mockData.name}님</h2>
        <p className="typo-caption text-secondary-subtext">{mockData.school} 인증됨</p>
      </section>

      <nav className="flex flex-col gap-3" aria-label="마이페이지 메뉴">
        {navigationInfo.map((info) => (
          <NavigationLink key={info.name} name={info.name} Icon={info.Icon} navigateUrl={info.navigateUrl} />
        ))}
      </nav>

      <div className="pt-6 pb-8 w-full flex justify-center items-center">
        <Button variant="tertiary">로그아웃</Button>
      </div>
    </>
  );
};

export default MyPage;
