"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";
import Button from "@/components/ui/button/button/Button";
import LabeledInput from "@/components/ui/input/labeledInput/LabeledInput";
import ProfileInput from "../_components/profileInput/ProfileInput";
import {
  validateNicknameOnBlur,
  validateNicknameOnChange,
} from "./validator/validator";
import { CONSTRAINTS } from "@/constants/constraints";

// TODO : mockData 서버 데이터 연결
const mockData = {
  name: "오밀오밀",
  school: "숙명여자대학교",
};

const ProfileEditPage = () => {
  const [nickname, setNickname] = useState(mockData.name);
  const [nicknameError, setNicknameError] = useState("");

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setNicknameError(validateNicknameOnChange(value));
  };

  const handleNicknameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNicknameError(validateNicknameOnBlur(value));
  };

  return (
    <>
      <Header title="프로필 수정" />

      <section className="px-4 py-6" aria-label="프로필 정보 수정">
        <h2 className="typo-h2-sub">프로필 정보 수정</h2>

        <div className="flex justify-center py-6">
          <ProfileInput />
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <LabeledInput
            id="nickname"
            label="닉네임"
            value={nickname}
            onChange={handleNicknameChange}
            onBlur={handleNicknameBlur}
            errorMessage={nicknameError}
            maxLength={CONSTRAINTS.NICKNAME.MAX_LENGTH}
          />

          <div className="flex flex-col justify-center gap-2">
            <span className="typo-body2">인증 대학교</span>
            <div className="relative">
              {/** TODO : 서버 연동 후 분기처리 필요 */}
              <input
                id="university"
                value={mockData.school}
                disabled
                className="w-full typo-body2 rounded-xl py-3 px-4 border border-gray-200 bg-gray-100 text-gray-400 pointer-events-none"
                aria-label="인증된 대학교"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 typo-caption text-gray-400">
                인증 완료
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <Button variant="primary">변경사항 저장</Button>
        </div>
      </section>
    </>
  );
};

export default ProfileEditPage;
