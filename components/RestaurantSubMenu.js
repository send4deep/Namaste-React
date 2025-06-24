import RestaurantMenuItems from "./RestaurantMenuItems";

const restaurantSubMenu = ({ item, showMenu, setShowIndex }) => {
  return (
    <div key={item?.card?.card?.title}>
      <div className="bg-gray-200 mb-3 p-2 shadow-md">
        <div className=" flex justify-between">
          <h3 className="font-bold">
            {item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})
          </h3>
          <button className="hover:cursor-pointer" onClick={setShowIndex}>
            {showMenu ? "🔺" : "🔻"}
          </button>
        </div>
        {showMenu && (
          <RestaurantMenuItems menuItems={item?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};
export default restaurantSubMenu;
