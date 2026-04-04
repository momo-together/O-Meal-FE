import { NICKNAME_ERROR_MESSAGES } from "@/constants/error";
import {
  satisfiesSpecialChar,
  satisfiesMaxLength,
  satisfiesMinLength,
  satisfiesNotEmpty,
} from "./validate";
import { CONSTRAINTS } from "@/constants/constraints";

/**
 * 닉네임 유효성을 검사하고 에러 메시지를 반환한다.
 * 검사 우선순위: 빈 값 → 최대 길이 초과 → 특수문자 포함
 * @param value - 검사할 닉네임
 * @returns 에러 메시지. 유효하면 빈 문자열 반환.
 */
export const validateNicknameOnChange = (value: string): string => {
  if (!satisfiesMaxLength(value, CONSTRAINTS.NICKNAME.MAX_LENGTH)) {
    return NICKNAME_ERROR_MESSAGES.EXCEEDS_MAX_LENGTH(
      CONSTRAINTS.NICKNAME.MAX_LENGTH,
    );
  }

  if (!satisfiesSpecialChar(value)) {
    return NICKNAME_ERROR_MESSAGES.SPECIAL_CHAR();
  }

  if (!satisfiesNotEmpty(value)) {
    return NICKNAME_ERROR_MESSAGES.DISALLOWED_EMPTY;
  }

  return "";
};

export const validateNickNameOnBlur = (value: string): string => {
  if (!satisfiesMinLength(value, CONSTRAINTS.NICKNAME.MIN_LENGTH)) {
    return NICKNAME_ERROR_MESSAGES.EMPTY;
  }

  return "";
};
