import { memo } from "react";
import CastView from "../../../../entities/cast";
import { useParams } from "react-router-dom";

export const Cast = memo(() => {
  const { id } = useParams();

  return (
    <div>
      <CastView type="cast" id={id as string} />
    </div>
  );
});
