import type { SVGProps } from "react";

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M1 9h22L21 21H3zM2 4h20v4H2zm5 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
      ></path>
    </svg>
  );
}
