import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 uppercase drop-shadow-2xl sm:px-6">
      <Link to="/" className="font-semibold tracking-widest">
        Fast react pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
