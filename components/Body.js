import ResturantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import useFetchRes from "../utils/useFetchRes";
import { Link } from "react-router";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const restaurants = useFetchRes();
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    setFilterRes(restaurants);
  }, [restaurants]);

  return filterRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex gap-8 ml-2 my-4">
        <div>
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border px-2"
          />
          <button
            className="bg-gray-300 border px-3"
            onClick={() => {
              const filterRes = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-300 border px-3"
          onClick={() => {
            setFilterRes(
              restaurants.filter((value) => value.info.avgRating > 4)
            );
          }}
        >
          Filter above 4 star
        </button>
      </div>
      <div className="flex flex-wrap justify-start gap-3 px-2">
        {filterRes.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <ResturantCard resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
