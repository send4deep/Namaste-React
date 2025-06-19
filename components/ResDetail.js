import { useEffect } from "react";

const ResDetails = () => {
  useEffect(() => {
    const resDetails = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5623631&lng=77.3453639&restaurantId=377799&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
    };
  }, []);
  return <div className="res-menu"></div>;
};
export default ResDetails;
