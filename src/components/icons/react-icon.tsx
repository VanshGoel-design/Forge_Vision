import type { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
        <circle cx="12" cy="12" r="1"></circle>
      </g>
    </svg>
  );
}
