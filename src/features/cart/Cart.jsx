import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const name = useSelector((store) => store.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  // const cart = fakeCart;

  // return null;

  function handleClick() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="hover: text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="font mt-7 text-xl font-semibold">Your cart, {name}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Link
          className="mt-6 inline-block space-x-2 rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-all hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed sm:px-3 sm:py-3"
          to="/order/new"
        >
          Order pizzas
        </Link>
        <Button type="secondary" onClick={handleClick}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
