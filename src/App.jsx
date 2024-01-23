import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./components/error/ErrorBoundaryFallback";
import { Fragment } from "react";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  /**
   * @param {{
   *  error: Error,
   *  info: {
   *    componentStack: string,
   *  }
   * }} param
   */
  const logErrorBoundary = (error, info) => {
    console.error(error, info.componentStack);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onError={logErrorBoundary}
    >
      <CustomCursor />
      <BrowserRouter>
        <Fragment>
          <Routes />
        </Fragment>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
