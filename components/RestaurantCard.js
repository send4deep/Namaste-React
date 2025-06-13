import { RES_IMAGES } from "../utils/constants";
import { Link } from "react-router";

const ResturantCard = (props) => {
  const resList = props.resList;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resList?.info;
  return (
    <div className="break-words w-60 bg-gray-100 p-3 rounded-2xl hover:bg-gray-200">
      <img
        src={RES_IMAGES + cloudinaryImageId}
        alt="Restaurant"
        className="rounded-2xl"
      />
      <h3 className="text-xl my-2 font-bold">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>
        <strong>{avgRating}</strong> stars
      </h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default ResturantCard;
