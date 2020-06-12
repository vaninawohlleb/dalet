import React from "react";
import styled, {
  keyframes
} from 'styled-components';

const stroke = keyframes `
  0% {
    fill: transparent;
    stroke-dasharray: 100 300;
    stroke-dashoffset: 500;
  }

  50%, 100% {
    stroke: #F4C578;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
`

const StyledSvgTopLeft = styled.svg `
  position: absolute;
  top: 0;
  width: 19%;
  fill: transparent;
  transform: rotate(90deg);
  animation: 2.5s ${stroke} linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  `
function Icon() {
  return (
    <StyledSvgTopLeft
      xmlns="http://www.w3.org/2000/svg"
      width="1079.049"
      height="400"
      viewBox="0 0 1079.049 400"
    >
      <path
        d="M1089.535 339.494a15.511 15.511 0 00-15.756-25.836c-48.26 16.33-112.416 4.9-171.578-30.55a261.69 261.69 0 00-125.876-37.048 261.55 261.55 0 00-94.784-90.178c-51.408-28.565-99.234-86.239-111.253-134.158A15.512 15.512 0 00555.245 10h-.372a15.537 15.537 0 00-14.826 12.468c-10 49.966-51.967 99.808-112.245 133.336a261.557 261.557 0 00-95.032 90.488 261.721 261.721 0 00-125.489 36.986C156.851 313.534 83 326.095 35.471 312.557a15.5 15.5 0 00-14.484 26.549C59.26 372.742 81.437 434 80.335 502.977A261.385 261.385 0 00111.18 630.5a261.694 261.694 0 00-30.705 127.176c.977 58.805-25.045 129.071-60.542 163.436a15.511 15.511 0 0015.756 25.836c48.26-16.345 112.416-4.9 171.578 30.55a261.522 261.522 0 00125.877 37.048 261.381 261.381 0 0094.783 90.162c51.408 28.565 99.234 86.239 111.253 134.158a15.506 15.506 0 0015.042 11.755h.372a15.537 15.537 0 0014.825-12.468c10-49.966 51.967-99.808 112.245-133.336a261.471 261.471 0 0095.032-90.5 261.551 261.551 0 00125.489-36.986c50.416-30.271 124.264-42.864 171.81-29.279a15.5 15.5 0 0014.485-26.552c-38.273-33.636-60.449-94.892-59.348-163.871a261.384 261.384 0 00-30.845-127.52 261.694 261.694 0 0030.705-127.179c-.977-58.806 25.045-129.071 60.543-163.436zM758.723 983.345a229.668 229.668 0 01-186.372-107.9A263.634 263.634 0 00598.9 706.981a260.29 260.29 0 0095.342 51.238 263.067 263.067 0 0063.939 10.359 227.832 227.832 0 0126.891 100.816 230.386 230.386 0 01-26.349 113.951zM324.3 876.249a228.981 228.981 0 0126.859-107.981 263.652 263.652 0 00159.218-61.349 260.3 260.3 0 003.3 108.136 263.414 263.414 0 0023.122 60.4 227.919 227.919 0 01-73.972 73.864 230.217 230.217 0 01-111.842 34.164A229.463 229.463 0 01324.3 876.249zm26.441-598.972a229.6 229.6 0 01186.376 107.887 263.617 263.617 0 00-26.549 168.461 259.764 259.764 0 00-159.2-61.442A228.032 228.032 0 01324.4 391.212a230.365 230.365 0 0126.344-113.936zM565.651 452.9a227.993 227.993 0 01-10.964 142.082c-23.541-57.131-22.161-119.922.155-174.711a233.116 233.116 0 0110.809 32.629zm-41.53 159.777c-61.256-8.173-114.928-40.754-151.232-87.479a234.964 234.964 0 0133.652 6.948 228.08 228.08 0 01117.58 80.532zm-57.844 17.555a260.515 260.515 0 00-92.085 56.914 263.934 263.934 0 00-40.754 50.2 227.987 227.987 0 01-100.956-27.107 230.334 230.334 0 01-85.494-79.8 229.669 229.669 0 01186.62-107.457 263.621 263.621 0 00132.669 107.251zm57.859 17.818c-37.715 48.942-92.767 79.105-151.356 87.185a233.992 233.992 0 0122.827-25.65 228.066 228.066 0 01128.53-61.533zm19.68 159.67a227.992 227.992 0 0110.964-142.082c23.541 57.131 22.161 119.922-.155 174.71a233.112 233.112 0 01-10.809-32.628zm41.545-159.777c61.256 8.173 114.928 40.754 151.216 87.479a234.318 234.318 0 01-33.636-6.947 227.956 227.956 0 01-117.58-80.532zm57.689-17.6a260.279 260.279 0 0092.225-56.867 264.205 264.205 0 0040.77-50.23 229.059 229.059 0 01186.434 106.941 229.669 229.669 0 01-186.62 107.453A263.591 263.591 0 00643.05 630.342zm-57.689-17.8a230.614 230.614 0 01151.433-87.293 236.507 236.507 0 01-22.952 25.8 228.076 228.076 0 01-128.481 61.489zm172.881-120.065A263.533 263.533 0 00599.086 553.7a260.183 260.183 0 00-3.286-108.164 263.411 263.411 0 00-23.122-60.4A229.059 229.059 0 01758.49 277.121a229.737 229.737 0 01-.248 215.356zM442.876 182.9c51.92-28.875 91.977-69.258 113.3-112.835 25.386 48.148 70.607 90.888 110.307 112.935a230.122 230.122 0 0173.29 64.435 261.324 261.324 0 00-109.407 37.451 258.3 258.3 0 00-75.466 71.17 260.056 260.056 0 00-185.55-108.523 230.931 230.931 0 0173.526-64.633zM111.335 503.473c.961-59.395-13.988-114.261-41.08-154.535 54.556 2.2 114.044-15.694 152.984-39.08a230.4 230.4 0 0192.442-31.248 261.458 261.458 0 00-22.285 113.5 258.254 258.254 0 0023.9 100.894A260.192 260.192 0 00130.565 599.45a230.541 230.541 0 01-19.23-95.977zM223.193 950.9c-46.182-27.666-95.667-42.166-140.562-42.166q-6.978 0-13.8.45c29-46.074 43.422-106.616 42.662-152.023a230.5 230.5 0 0119.137-95.683 261.733 261.733 0 0087.138 76.05 258.282 258.282 0 0099.312 29.852 260.1 260.1 0 00-1.148 214.876 231.008 231.008 0 01-92.739-31.356zm443.4 126.823c-51.92 28.875-91.977 69.258-113.3 112.835-25.386-48.152-70.607-90.891-110.307-112.943a230.531 230.531 0 01-73.305-64.435A261.872 261.872 0 00479.1 975.746a258.3 258.3 0 0075.461-71.165 259.969 259.969 0 00185.55 108.508 230.766 230.766 0 01-73.52 64.636zm331.539-320.574c-.961 59.395 13.988 114.261 41.08 154.535-54.587-2.342-114.044 15.694-152.984 39.08a230.723 230.723 0 01-92.442 31.248 261.456 261.456 0 0022.285-113.5 258.357 258.357 0 00-23.836-100.8 260.814 260.814 0 00186.683-106.556 230.9 230.9 0 0119.214 95.993zM891.7 523.09a258.284 258.284 0 00-99.358-29.775 260.093 260.093 0 001.194-214.907 230.811 230.811 0 0192.721 31.326c50.959 30.535 105.98 44.941 154.364 41.7-29 46.074-43.422 106.616-42.662 152.023a230.5 230.5 0 01-19.137 95.683 261.337 261.337 0 00-87.122-76.05z"
        data-name="Path 31"
        transform="translate(-15.209 -10)"
      ></path>
    </StyledSvgTopLeft>
  );
}

export default Icon;