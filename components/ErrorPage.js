import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div className="error-container">
      <h1>OMG!</h1>
      <h2>Looks like something is gone wrong with your app.</h2>
      <h4>
        {err.status} : {err.data}
      </h4>
    </div>
  );
};
export default ErrorPage;
