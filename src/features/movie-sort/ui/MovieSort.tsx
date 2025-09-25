import { Select, } from "antd";
// import type { SearchProps } from "antd/es/input";
import { memo } from "react";
// import { useSearchParams } from "react-router-dom";



export const MovieSort = memo(() => {

  // const [searchParams, setSearchParams] = useSearchParams();

  // const onSearch: SearchProps["onSearch"] = (s)=> {
  //   searchParams.set("sortBy", s.toString())
  //   setSearchParams
  // }

  return (
    <div className="container">
      <Select
        className="w-60"
        placeholder="Sort by"
        options={[
          { value: "popularity.desc", label: "Popuplar" },
          { value: "vote_average.asc", label: "Vote -" },
          { value: "vote_average.desc", label: "Vote +" },
        ]}
      />
    </div>
  );
});
