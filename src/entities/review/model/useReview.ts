import { useQuery } from "@tanstack/react-query";
import { fetchReviewById } from "../api/fetchApi";

export const useReviw = () => {
  const getReview = (id: string) =>
    useQuery({
      queryKey: ["reviewKey", id],
      queryFn: () => fetchReviewById(id),
    });
  return { getReview };
};
