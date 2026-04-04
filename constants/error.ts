export const NICKNAME_ERROR_MESSAGES = {
  EMPTY: "닉네임은 2자 이상이어야 합니다.",
  DISALLOWED_EMPTY: "공백은 입력할 수 없습니다.",
  EXCEEDS_MAX_LENGTH: (maxLength: number) =>
    `닉네임은 최대 ${maxLength}자까지 입력할 수 있습니다.`,
  SPECIAL_CHAR: () => "특수문자는 . , _ , -만 허용됩니다.",
} as const;
