import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 hover:drop-shadow-md focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        placeholder="Search order no."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
