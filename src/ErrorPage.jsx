import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, an error occurred: {error.status}</p>
      <p>
        {error.statusText} {error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
