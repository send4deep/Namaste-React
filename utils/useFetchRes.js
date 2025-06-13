import { useState, useEffect } from "react";
const useFetchRes = () => {
  const [fetchRes, setFetchRes] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Simulating an API call to fetch restaurant data
  const fetchRestaurants = async () => {
    // In a real application, you would fetch data from an API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6172657&lng=77.2852317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Here we are using the mock data directly
    setFetchRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return fetchRes;
};
export default useFetchRes;
