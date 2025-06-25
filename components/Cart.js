import { useSelector, useDispatch } from "react-redux";
import RestaurantMenuItems from "./RestaurantMenuItems";
import { clearCart } from "../utils/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1 className="text-lg font-bold mb-2">Cart Items</h1>
      <button
        className="bg-gray-200 border-gray-600 border px-2 mb-5 hover:cursor-pointer"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h2>Cart is Empty. Please select any item to reflect on cart page.</h2>
      )}
      <div className="flex w-8/12 m-auto flex-col text-left">
        <RestaurantMenuItems menuItems={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
