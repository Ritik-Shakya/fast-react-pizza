import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice } from "./cartSlice";

function CartOverview() {
  const totalItem = useSelector((store) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );

  const totalprice = useSelector(getTotalPrice);

  if (!totalItem) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalItem} pizzas</span>
        <span>{totalprice}</span>
      </p>
      <Link to="/cart" className="float-end">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
