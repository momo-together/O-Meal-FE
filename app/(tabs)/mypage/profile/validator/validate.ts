import { CONSTRAINTS } from "@/constants/constraints";

/**
 * 닉네임이 2자 이상인지 확인한다.
 * @param value - 검사할 문자열
 * @returns 2자 미만이면 true, 아니면 false
 */
export const satisfiesMinLength = (
  value: string,
  minLength: number,
): boolean => {
  return value.trim().length >= minLength;
};

/**
 * 닉네임이 최대 길이를 초과하는지 확인한다.
 * @param value - 검사할 문자열
 * @param maxLength - 최대 허용 길이
 * @returns 최대 길이를 초과하지 않으면 true, 아니면 false
 */
export const satisfiesMaxLength = (
  value: string,
  maxLength: number,
): boolean => {
  return value.length <= maxLength;
};

/**
 * 닉네임에 허용되지 않는 특수문자가 포함되어 있는지 확인한다.
 * 허용 문자: 영문 대소문자, 숫자, 한글, 하이픈(-), 언더스코어(_), 닷(.), 공백
 * @param value - 검사할 문자열
 * @returns 특수문자가 포함되면 true, 아니면 false
 */
export const satisfiesSpecialChar = (value: string): boolean => {
  return !new RegExp(CONSTRAINTS.NICKNAME.DISALLOWED_CHAR_REG).test(value);
};

/**
 * 닉네임에서 허용되지 않는 특수문자 목록을 중복 없이 추출한다.
 * @param value - 검사할 문자열
 * @returns 허용되지 않는 특수문자 배열. 없으면 빈 배열 반환.
 */
export const extractSpecialChars = (value: string): string[] => {
  const matches = value.match(
    new RegExp(CONSTRAINTS.NICKNAME.DISALLOWED_CHAR_REG, "g"),
  );
  return matches ? [...new Set(matches)] : [];
};

export const satisfiesNotEmpty = (value: string) => {
  return !value.includes(" ");
};
