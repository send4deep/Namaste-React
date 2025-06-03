import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Simulating an API call to fetch restaurant data
  const fetchRestaurants = async () => {
    // In a real application, you would fetch data from an API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5121551&lng=77.3912953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Here we are using the mock data directly
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (filterRes.length === 0) {
    return <Shimmer />;
  }

  return (
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
          <ResturantCard key={restaurant?.info?.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
