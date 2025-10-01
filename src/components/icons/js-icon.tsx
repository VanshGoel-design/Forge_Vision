import type { SVGProps } from "react";

export function JsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 21a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1m-4-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1m8 2a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1M4 21a1 1 0 0 1-1-1V12a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1m16-5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1"
      ></path>
    </svg>
  );
}
