import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import RestaurantSubMenu from "./RestaurantSubMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  let prevIndex = 0;

  if (resInfo === null) return <Shimmer />;
  if (!resInfo?.cards) return <h1>Something went wrong</h1>;
  const { name, cuisines } = resInfo?.cards[2]?.card?.card.info;
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (elm) =>
        elm?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-8/12 m-auto">
      <h1 className="font-bold text-4xl text-center">{name}</h1>
      <h2 className="text-2xl font-bold my-4 text-center">
        {cuisines.join(", ")}
      </h2>
      {category?.map((item, index) => (
        <RestaurantSubMenu
          key={item?.card?.card?.title}
          item={item}
          showMenu={index === showIndex ? true : false}
          setShowIndex={() =>
            // setShowIndex(index),
            index === prevIndex
              ? ((prevIndex = null), setShowIndex(null))
              : ((prevIndex = index), setShowIndex(index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
