import { exceedsMaxLength, extractSpecialChars, hasSpecialChar, isEmpty } from "./validate";

export const MAX_NICKNAME_LENGTH = 10;

/**
 * 닉네임 유효성을 검사하고 에러 메시지를 반환한다.
 * 검사 우선순위: 빈 값 → 최대 길이 초과 → 특수문자 포함
 * @param value - 검사할 닉네임
 * @returns 에러 메시지. 유효하면 빈 문자열 반환.
 */
export const validateNickname = (value: string): string => {
  if (isEmpty(value)) {
    return "닉네임을 입력해 주세요.";
  }

  if (exceedsMaxLength(value, MAX_NICKNAME_LENGTH)) {
    return `닉네임은 최대 ${MAX_NICKNAME_LENGTH}자까지 입력할 수 있습니다.`;
  }

  if (hasSpecialChar(value)) {
    const specialChars = extractSpecialChars(value);
    return `${specialChars.join("")} 은(는) 입력할 수 없습니다.`;
  }

  return "";
};
