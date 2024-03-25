import React from "react";
import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error: any = useRouteError();
  return (
    <div className="bg-1A202C whiteDM min-h-screen flex justify-center flex-col items-center text-3xl tracking-widest">
      {error.statusText.toUpperCase() || error.message.toUpperCase()}
    </div>
  );
};

export default NotFoundPage;
