/**
 * 닉네임이 비어있는지 확인한다.
 * @param value - 검사할 문자열
 * @returns 비어있거나 공백만 있으면 true, 아니면 false
 */
export const isEmpty = (value: string): boolean => {
  return value.trim().length === 0;
};

/**
 * 닉네임이 최대 길이를 초과하는지 확인한다.
 * @param value - 검사할 문자열
 * @param maxLength - 최대 허용 길이
 * @returns 최대 길이를 초과하면 true, 아니면 false
 */
export const exceedsMaxLength = (value: string, maxLength: number): boolean => {
  return value.length > maxLength;
};

/**
 * 닉네임에 특수문자가 포함되어 있는지 확인한다.
 * 한글, 영문, 숫자, 공백만 허용한다.
 * @param value - 검사할 문자열
 * @returns 특수문자가 포함되면 true, 아니면 false
 */
export const hasSpecialChar = (value: string): boolean => {
  return /[^가-힣a-zA-Z0-9\s]/.test(value);
};

/**
 * 닉네임에서 특수문자를 중복 없이 추출한다.
 * @param value - 검사할 문자열
 * @returns 고유한 특수문자 배열
 */
export const extractSpecialChars = (value: string): string[] => {
  const matched = value.match(/[^가-힣a-zA-Z0-9\s]/g);
  return matched ? [...new Set(matched)] : [];
};
