import { redirect } from "next/navigation";
import { ROUTE } from "@/constants/routes";

const RestaurantDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  redirect(ROUTE.RESTAURANT.INFO(id));
};

export default RestaurantDetailPage;
