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
  },
} as const;

export const createFolderRoute = (folderId: string) => `/folders/${folderId}`;

export const createRestaurantInfoRoute = (id: string) => `/restaurant/${id}/info`;
export const createRestaurantWikiRoute = (id: string) => `/restaurant/${id}/wiki`;
export const createRestaurantPhotoRoute = (id: string) => `/restaurant/${id}/photo`;
