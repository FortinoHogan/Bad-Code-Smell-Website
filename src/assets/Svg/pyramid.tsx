import React, { useEffect, useState } from "react";

interface IPyramid {
  fill?: string;
  className?: string;
  animationDelay?: number;
}

const Pyramid = (props: IPyramid) => {
  const { fill, className, animationDelay } = props;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, animationDelay);
  }, [animationDelay]);

  return (
    <svg
      fill={fill}
      height="53"
      width="46"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.99 511.99"
      className={`${className} ${animate ? "animate-cube" : ""}`}
    >
      <g>
        <g>
          <path
            d="M509.711,345.42L243.109,4.15c-0.149-0.171-0.277-0.341-0.427-0.491c-1.515-1.749-3.477-2.901-5.611-3.392
			c-0.341-0.085-0.683-0.149-1.045-0.192h-0.021c-2.581-0.299-5.269,0.277-7.531,1.899c-0.341,0.277-0.683,0.533-1.003,0.832
			c-1.131,1.045-2.005,2.283-2.581,3.627L0.975,496.908c-1.493,3.307-1.216,7.147,0.747,10.197c1.941,3.051,5.333,4.885,8.96,4.885
			h341.099c0.085,0,0.171,0,0.235,0c0.768,0,1.536-0.085,2.325-0.32c0.021,0,0.021,0,0.021,0c0.021,0,0.021,0,0.021,0
			c0.021,0,0.021,0,0.021,0h0.021c0.021-0.021,0.043-0.021,0.064-0.021h0.021c0.021,0,0.043,0,0.043,0h0.021
			c1.984-0.491,3.712-1.536,5.056-2.923l149.205-149.205C512.655,355.702,513.018,349.665,509.711,345.42z M27.279,490.657
			L231.503,43.276L338.49,490.657H27.279z M357.967,480.31L256.463,55.862l230.677,295.275L357.967,480.31z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Pyramid;
