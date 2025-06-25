import { RES_IMAGES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuItems = ({ menuItems }) => {
  const dispatch = useDispatch();
  const handleAddClick = (itemName) => {
    dispatch(addItem(itemName));
  };
  return !menuItems || menuItems.length === 0 ? (
    ""
  ) : (
    <div>
      {menuItems.map((item) => (
        <div
          key={item?.card?.info?.id}
          data-testid="sub-menu-item"
          className="flex justify-between mb-3 p-3 border-b border-gray-400"
        >
          <div className="w-9/12">
            <h3 className="font-medium">
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h3>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 relative flex justify-center">
            <img
              src={RES_IMAGES + item?.card?.info?.imageId}
              alt=""
              className="border border-gray-500"
            />
            <button
              className="py-1 px-3 bg-gray-400 border absolute bottom-1 hover:cursor-pointer"
              onClick={() => handleAddClick(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItems;
