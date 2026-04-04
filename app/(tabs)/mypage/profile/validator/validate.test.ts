import { describe, expect, it } from "vitest";
import { extractSpecialChars, exceedsMaxLength, hasSpecialChar, isEmpty } from "./validate";

describe("isEmpty", () => {
  it("빈 문자열이면 true를 반환해야 한다.", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("공백만 있는 문자열이면 true를 반환해야 한다.", () => {
    expect(isEmpty("   ")).toBe(true);
  });

  it("문자가 있으면 false를 반환해야 한다.", () => {
    expect(isEmpty("오밀")).toBe(false);
  });
});

describe("exceedsMaxLength", () => {
  it("최대 길이를 초과하면 true를 반환해야 한다.", () => {
    expect(exceedsMaxLength("12345678901", 10)).toBe(true);
  });

  it("최대 길이와 같으면 false를 반환해야 한다.", () => {
    expect(exceedsMaxLength("1234567890", 10)).toBe(false);
  });

  it("최대 길이 미만이면 false를 반환해야 한다.", () => {
    expect(exceedsMaxLength("abc", 10)).toBe(false);
  });
});

describe("hasSpecialChar", () => {
  it("특수문자가 포함되면 true를 반환해야 한다.", () => {
    expect(hasSpecialChar("hello!")).toBe(true);
    expect(hasSpecialChar("닉네임@")).toBe(true);
    expect(hasSpecialChar("test#1")).toBe(true);
  });

  it("한글, 영문, 숫자만 있으면 false를 반환해야 한다.", () => {
    expect(hasSpecialChar("오밀오밀")).toBe(false);
    expect(hasSpecialChar("hello123")).toBe(false);
    expect(hasSpecialChar("닉네임1")).toBe(false);
  });

  it("공백은 특수문자로 취급하지 않아야 한다.", () => {
    expect(hasSpecialChar("hello world")).toBe(false);
  });
});

describe("extractSpecialChars", () => {
  it("특수문자 목록을 중복 없이 반환해야 한다.", () => {
    expect(extractSpecialChars("hello!!@")).toEqual(["!", "@"]);
  });

  it("특수문자가 없으면 빈 배열을 반환해야 한다.", () => {
    expect(extractSpecialChars("hello")).toEqual([]);
  });

  it("여러 종류의 특수문자를 추출해야 한다.", () => {
    const result = extractSpecialChars("닉!@#");
    expect(result).toContain("!");
    expect(result).toContain("@");
    expect(result).toContain("#");
  });
});
