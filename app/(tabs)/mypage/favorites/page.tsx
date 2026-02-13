import Header from "@/components/layout/header/Header";
import RestaurantCard from "../_components/restaurantCard/RestaurantCard";

const MOCK_FAVORITES = [
  { name: "청파동 제육집", imageUrl: "/asdf", href: "/restaurant/1" },
  { name: "일식당 무무", imageUrl: "/asdfasdf", href: "/restaurant/2" },
];

const FavoritesPage = () => {
  const favorites = MOCK_FAVORITES;

  return (
    <>
      <Header title="찜한 맛집" />

      <section className="px-4 py-6" aria-label="찜한 맛집 목록">
        <h2 className="typo-h2-sub">
          찜한 맛집 <span className="typo-body2 text-gray-400">{favorites.length}</span>
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {favorites.map((restaurant) => (
            <RestaurantCard key={restaurant.href} name={restaurant.name} imageUrl={restaurant.imageUrl} href={restaurant.href} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
