import { useSelector } from "react-redux";

function Username() {
  const name = useSelector((store) => store.user.userName);

  return <div className="hidden text-sm font-semibold md:block">{name}</div>;
}

export default Username;
