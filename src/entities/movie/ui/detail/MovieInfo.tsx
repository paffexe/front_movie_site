import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div className="w-full">
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt={data?.title}
          className="w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <h1 className="text-white text-4xl md:text-5xl font-bold px-6 pb-8">
            {data?.title}
          </h1>
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-[280px]">
            <img
              src={createImageUrl(data?.poster_path)}
              alt={data?.title}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-2xl font-semibold">{data?.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data?.overview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <p>
                <span className="font-semibold">Release:</span>{" "}
                {data?.release_date}
              </p>
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                {data?.budget?.toLocaleString()} USD
              </p>
              <p>
                <span className="font-semibold">Runtime:</span> {data?.runtime}{" "}
                min
              </p>
              <p>
                <span className="font-semibold">Rating:</span>{" "}
                {data?.vote_average} / 10
              </p>
              <p>
                <span className="font-semibold">Votes:</span>{" "}
                {data?.vote_count?.toLocaleString()}
              </p>
            </div>

            {data?.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-fit px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
              >
                Visit Homepage
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="flex overflow-x-auto gap-3 pb-3 scrollbar-thin scrollbar-thumb-gray-400">
          {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <Image
              key={inx}
              className="min-w-[200px] rounded-lg shadow hover:shadow-xl transition"
              src={createImageUrl(item.file_path)}
              alt=""
              preview={true}
            />
          ))}
        </div>
      </section>

      <section className="container mt-8">
        <div className="flex gap-4 border-b border-gray-300 dark:border-gray-700">
          <Link
            to={""}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#c61f1f] border-b-2 border-transparent hover:border-[#c61f1f] transition-colors"
          >
            Reviews
          </Link>
          <Link
            to={"cast"}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#c61f1f] border-b-2 border-transparent hover:border-[#c61f1f] transition-colors"
          >
            Cast
          </Link>
          <Link
            to={"crew"}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#c61f1f] border-b-2 border-transparent hover:border-[#c61f1f] transition-colors"
          >
            Crew
          </Link>
        </div>
      </section>
    </div>
  );
});
