import { api } from "../../../shared/api";

export const fetchReviewById = async (id: string) => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data;
};
