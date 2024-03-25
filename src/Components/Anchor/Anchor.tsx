import React from "react";
import { IAnchor } from "./IAnchor";

const Anchor = (props: IAnchor) => {
  const { href, children, className, classNameA } = props;
  return (
    <a href={href} className={classNameA}>
      <div className={className}>{children}</div>
    </a>
  );
};

export default Anchor;
