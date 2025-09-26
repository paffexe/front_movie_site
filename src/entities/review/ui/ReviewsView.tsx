import { memo, type FC } from "react";
import { useReviw } from "../model/useReview";
import { ReviewCard } from "./ReviewCard";

interface Props {
  id: string;
}

export const ReviewsView: FC<Props> = memo((props) => {
  const { id } = props;
  const { getReview } = useReviw();
  const { data } = getReview(id);

  console.log(data?.results);

  const reviews = data?.results ?? [];

  return (
    <div className="mt-6 space-y-6">
      {reviews.length > 0 ? (
        reviews.map((elem: any) => <ReviewCard key={elem.id} elem={elem} />)
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300 italic">
          No reviews so far.
        </p>
      )}
    </div>
  );
});
