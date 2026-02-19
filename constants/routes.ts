export const ROUTE = {
  HOME: "/",
  MYPAGE: {
    INDEX: "/mypage",
    PROFILE: "/mypage/profile",
    ACTIVITY: "/mypage/activity",
    FAVORITES: "/mypage/favorites",
  },
} as const;

export const createRestaurantInfoRoute = (id: string) => `/restaurant/${id}/info`;
export const createRestaurantWikiRoute = (id: string) => `/restaurant/${id}/wiki`;
export const createRestaurantPhotoRoute = (id: string) => `/restaurant/${id}/photo`;
