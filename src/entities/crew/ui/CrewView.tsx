import { memo } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "@/shared/utils";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data } = getCrewById(id as string);

  console.log(data);

  return (
    <div className="container py-10">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center md:justify-start">
          <img
            src={createImageUrl(data?.profile_path)}
            alt={data?.name}
            className="w-[300px] h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {data?.name}
          </h1>

          <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
            <li>
              <span className="font-medium">Birthday:</span>{" "}
              {data?.birthday || "Unknown"}
            </li>
            <li>
              <span className="font-medium">Place of Birth:</span>{" "}
              {data?.place_of_birth || "Unknown"}
            </li>
            {data?.homepage && (
              <li>
                <span className="font-medium">Homepage:</span>{" "}
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:underline"
                >
                  {data.homepage}
                </a>
              </li>
            )}
          </ul>

          <div>
            <h2 className="text-xl font-semibold mb-2">Biography</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 pr-2">
              {data?.biography || "No biography available."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});
