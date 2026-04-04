// NOTE: domain 제약 사항

export const CONSTRAINTS = {
  NICKNAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 10,
    DISALLOWED_CHAR_REG:
      "[^a-zA-Z0-9._\\-\\uAC00-\\uD7A3\\u1100-\\u11FF\\u3130-\\u318F\\s]",
  },
} as const;
