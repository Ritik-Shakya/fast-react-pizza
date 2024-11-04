import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <button
        className="hover: text-sm text-blue-500 hover:text-blue-700 hover:underline"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default NotFound;
