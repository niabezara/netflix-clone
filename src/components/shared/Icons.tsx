import React, { SVGProps } from "react";

type IconProps = SVGProps<
  SVGSVGElement &
    SVGPathElement &
    SVGCircleElement &
    SVGPolylineElement &
    SVGPolygonElement &
    SVGRectElement
> & {};

export const Icons = {
  logo: (props: { width?: string; height?: string | undefined }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height || "55"}
      width={props.width || "155"}
      viewBox="-153.6 -69.1855 1331.2 415.113"
    >
      <path
        fill="#d81f26"
        d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
      />
    </svg>
  ),
  arrowDownIcon: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 16L6 10H18L12 16Z" fill="white" {...props} />
    </svg>
  ),
  lang: () => (
    <svg
      height="18"
      viewBox="0 0 512 512"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <line
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
        x1="48"
        x2="336"
        y1="112"
        y2="112"
      />
      <line
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
        x2="192"
        y1="64"
        y2="112"
      />
      <polyline
        points="272 448 368 224 464 448"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <line
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
        x1="301.5"
        x2="434.5"
        y1="384"
        y2="384"
      />
      <path
        d="M281.3,112S257,206,199,277,80,384,80,384"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <path
        d="M256,336s-35-27-72-75-56-85-56-85"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
    </svg>
  ),
  playIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 48 48"
      id="play"
    >
      <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path>
    </svg>
  ),
  info: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="info"
      fill="white"
    >
      <g>
        <g>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
          <circle cx="12" cy="8" r="1"></circle>
          <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"></path>
        </g>
      </g>
    </svg>
  ),
};
