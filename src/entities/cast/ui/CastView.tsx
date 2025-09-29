import { memo, type FC } from "react";
import { useCast } from "../model/useCast";
import { useNavigate } from "react-router-dom";
import { createImageUrl } from "../../../shared/utils";

interface Props {
  id: string;
  type: string;
}

export const CastView: FC<Props> = memo((props) => {
  const { id, type } = props;
  const { getCast } = useCast();
  const { data } = getCast(id);
  const navigate = useNavigate();

  return (
    <div className="container mt-5 mb-5">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400">
        {data &&
          data[type]?.map((item: any) => (
            <div
              onClick={() => navigate(`/crew/${item.id}`)}
              key={item.id}
              className="min-w-[150px] bg-white dark:bg-slate-900 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={createImageUrl(item.profile_path)}
                className="w-full h-[200px] object-cover rounded-t-xl"
                alt={item.original_name}
              />

              <div className="p-3">
                <h3
                  className="font-semibold text-sm line-clamp-1 text-gray-900 dark:text-gray-100"
                  title={item.original_name}
                >
                  {item.original_name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                  {type === "cast" ? item.character : item.job}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
