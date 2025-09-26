import { memo, useState } from "react";
import { createImageUrl } from "../../../shared/utils";

export const ReviewCard = memo(({ elem }: { elem: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const preview =
    elem.content.length > 200
      ? elem.content.slice(0, 200) + "..."
      : elem.content;

  return (
    <div className="bg-[#eaeaea] dark:bg-[#1d1d1d80] rounded-2xl p-5 shadow-md">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={createImageUrl(elem.author_details.avatar_path)}
          alt={elem.username}
          className="w-12 h-12 rounded-full border-2 border-[#c61f1f] object-cover"
        />
        <div>
          <h3 className="font-semibold text-[#c61f1f]">{elem.author}</h3>
          {elem.author_details.rating && (
            <div className="text-sm text-gray-600 dark:text-gray-300">
              ⭐ {elem.author_details.rating}/10
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
        {expanded ? elem.content : preview}
      </p>

      {elem.content.length > 200 && (
        <button
          onClick={toggleExpand}
          className="mt-3 text-[#c61f1f] font-medium hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
});
