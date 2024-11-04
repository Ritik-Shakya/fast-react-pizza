import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getId } from "../cart/cartSlice";
import UpdateCartItem from "../cart/UpdateCartItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const cart = useSelector(getId);
  const presentornot = cart.includes(id);

  function handleClick() {
    const item = {
      pizzaId: id,
      name: name,
      price: unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(item));
    // console.log(item);
  }

  function handleDelete() {
    dispatch(deleteItem(id));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {presentornot ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateCartItem id={id}></UpdateCartItem>
              <Button type="small" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          ) : null}
          {!soldOut && !presentornot && (
            <Button type="small" onClick={handleClick}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
