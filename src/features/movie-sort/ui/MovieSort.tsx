import { Select, DatePicker, Button } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import { useMovie } from "@/entities/movie";

const { RangePicker } = DatePicker;

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getMovieGenre } = useMovie();

  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const with_genres = searchParams.get("genres") ?? "16";
  const fromDate = searchParams.get("from") ?? "";
  const toDate = searchParams.get("to") ?? "";

  const { data: genreData } = getMovieGenre();

  const sortOptions = [
    { value: "popularity.desc", label: "Most popular" },
    { value: "primary_release_date.asc", label: "Oldest" },
    { value: "primary_release_date.desc", label: "Newest" },
    { value: "vote_average.desc", label: "Highest rated" },
  ];

  const handleSortChange = (value: string) => {
    searchParams.set("sort", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handleGenreChange = (value: string) => {
    searchParams.set("genres", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handleDateChange = (dates: any) => {
    if (dates) {
      searchParams.set("from", dayjs(dates[0]).format("YYYY-MM-DD"));
      searchParams.set("to", dayjs(dates[1]).format("YYYY-MM-DD"));
    } else {
      searchParams.delete("from");
      searchParams.delete("to");
    }
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <div
      className="
        grid gap-4 mt-6
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        
      "
    >
      <Select
        className="selectClass "
        placeholder="Sort by"
        value={sort_by}
        onChange={handleSortChange}
        options={sortOptions}
      />

      <Select
        className="selectClass "
        placeholder="Select a genre"
        value={with_genres}
        onChange={handleGenreChange}
        options={genreData?.genres?.map((g: any) => ({
          value: g.id.toString(),
          label: g.name,
        }))}
      />

      <RangePicker
        value={fromDate && toDate ? [dayjs(fromDate), dayjs(toDate)] : null}
        onChange={handleDateChange}
        className="selectClass "
      />

      <Button
        onClick={() => handleDateChange(null)}
        className="selectClass btn"
      >
        Reset Dates
      </Button>
    </div>
  );
});
