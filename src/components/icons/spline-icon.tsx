import type { SVGProps } from "react";

export function SplineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 3a9 9 0 0 1 9 9a9 9 0 0 1-9 9m0-18a9 9 0 0 0-9 9a9 9 0 0 0 9 9"></path>
        <path d="M12 3a9 9 0 0 0 0 18m0-18a9 9 0 0 1 0 18"></path>
      </g>
    </svg>
  );
}
