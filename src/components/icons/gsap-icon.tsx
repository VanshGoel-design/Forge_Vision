import type { SVGProps } from "react";

export function GsapIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.4 20.7L4 12l9.4-8.7c.6-.6 1.7-.2 1.7.7v3.2c0 .4.2.8.6 1l5.4 3.8c.4.3.4.9 0 1.2l-5.4 3.8c-.4.2-.6.6-.6 1v3.2c0 .9-1.1 1.3-1.7.7"
      ></path>
    </svg>
  );
}
