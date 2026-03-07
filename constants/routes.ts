export const ROUTE = {
  HOME: "/",
  MYPAGE: {
    INDEX: "/mypage",
    PROFILE: "/mypage/profile",
    ACTIVITY: "/mypage/activity",
    FAVORITES: "/mypage/favorites",
  },
  FOLDER: {
    INDEX: "/folders",
    DETAIL: (folderId: string) => `/folders/${folderId}`,
  },
  RESTAURANT: {
    INFO: (id: string) => `/restaurants/${id}/info`,
    WIKI: (id: string) => `/restaurants/${id}/wiki`,
    PHOTO: (id: string) => `/restaurants/${id}/photo`,
  },
} as const;
