import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateCartItem({ id }) {
  const dispatch = useDispatch();
  const item = useSelector((store) =>
    store.cart.cart.find((item) => item.pizzaId === id),
  );
  const noItem = item.quantity;

  return (
    <div className="flex gap-2 sm:gap-4">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="font-medium">{noItem}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartItem;
