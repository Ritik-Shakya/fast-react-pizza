import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { deleteItem } from "./cartSlice";
import UpdateCartItem from "./UpdateCartItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateCartItem id={pizzaId} />
        <Button type="small" onClick={handleClick}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
