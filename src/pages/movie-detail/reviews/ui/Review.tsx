import { memo } from "react";
import { useParams } from "react-router-dom";
import { ReviewsView } from "../../../../entities/review";

export const Review = memo(() => {
  const { id } = useParams();

  return (
    <div>
      <ReviewsView id={id as string} />
    </div>
  );
});
