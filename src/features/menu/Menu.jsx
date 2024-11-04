import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza, index) => (
        <MenuItem pizza={pizza} key={index} />
      ))}
    </ul>
  );
}

export async function Loader() {
  const data = getMenu();
  return data;
}

export default Menu;
