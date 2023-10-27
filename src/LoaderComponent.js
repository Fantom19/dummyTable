import { Suspense } from "react";

const LoaderComponent = ({ ...Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default LoaderComponent;
