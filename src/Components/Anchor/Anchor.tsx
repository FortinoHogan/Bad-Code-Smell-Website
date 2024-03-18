import React from "react";
import { IAnchor } from "./IAnchor";

const Anchor = (props: IAnchor) => {
  const { href, children, className } = props;
  return (
    <div className={className}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default Anchor;
