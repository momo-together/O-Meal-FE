import { validateNicknameOnChange } from "./validator";
import { CONSTRAINTS } from "@/constants/constraints";
import { describe, expect, it } from "vitest";

const MAX_NICKNAME_LENGTH = CONSTRAINTS.NICKNAME.MAX_LENGTH;

describe("validateNickname", () => {
  it("유효한 닉네임이면 빈 문자열을 반환해야 한다.", () => {
    expect(validateNicknameOnChange("오밀오밀")).toBe("");
    expect(validateNicknameOnChange("hello123")).toBe("");
    expect(validateNicknameOnChange("닉네임 ok")).toBe("");
  });

  it("닉네임이 비어있으면 에러 메시지를 반환해야 한다.", () => {
    expect(validateNicknameOnChange("")).not.toBe("");
    expect(validateNicknameOnChange("   ")).not.toBe("");
  });

  it(`닉네임이 ${MAX_NICKNAME_LENGTH}자를 초과하면 에러 메시지를 반환해야 한다.`, () => {
    const tooLong = "가".repeat(MAX_NICKNAME_LENGTH + 1);
    expect(validateNicknameOnChange(tooLong)).not.toBe("");
  });

  it(`닉네임이 정확히 ${MAX_NICKNAME_LENGTH}자이면 에러 메시지를 반환하지 않아야 한다.`, () => {
    const exactLength = "가".repeat(MAX_NICKNAME_LENGTH);
    expect(validateNicknameOnChange(exactLength)).toBe("");
  });

  it("특수문자가 포함된 경우 해당 특수문자를 포함한 에러 메시지를 반환해야 한다.", () => {
    const result = validateNicknameOnChange("닉네임!");
    expect(result).toContain("!");
    expect(result).not.toBe("");
  });

  it("여러 특수문자가 포함된 경우 모든 특수문자를 에러 메시지에 포함해야 한다.", () => {
    const result = validateNicknameOnChange("test!@");
    expect(result).toContain("!");
    expect(result).toContain("@");
  });

  it("빈 값 검사를 최대 길이보다 먼저 수행해야 한다.", () => {
    expect(validateNicknameOnChange("")).toBe("닉네임을 입력해 주세요.");
  });

  it("최대 길이 검사를 특수문자보다 먼저 수행해야 한다.", () => {
    const tooLongWithSpecial = "가".repeat(MAX_NICKNAME_LENGTH + 1) + "!";
    const result = validateNicknameOnChange(tooLongWithSpecial);
    expect(result).toBe(
      `닉네임은 최대 ${MAX_NICKNAME_LENGTH}자까지 입력할 수 있습니다.`,
    );
  });
});
