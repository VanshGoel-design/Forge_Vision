import type { SVGProps } from "react";

export function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 10.83a1 1 0 0 0-1 1V13a1 1 0 1 0 2 0v-1.17a1 1 0 0 0-1-1m-4 0a1 1 0 0 0-1 1V13a1 1 0 1 0 2 0v-1.17a1 1 0 0 0-1-1m8 0a1 1 0 0 0-1 1V13a1 1 0 1 0 2 0v-1.17a1 1 0 0 0-1-1m5-6.83H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H4V6h16Z"
      ></path>
    </svg>
  );
}
