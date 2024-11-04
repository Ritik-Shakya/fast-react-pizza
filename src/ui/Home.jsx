import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const name = useSelector((store) => store.user.userName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {name === "" ? (
        <CreateUser />
      ) : (
        <Link
          to="/menu"
          className="inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800 transition-all hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed md:px-6 md:py-4"
        >
          Continue Ordering ,{name}
        </Link>
      )}
    </div>
  );
}

export default Home;
