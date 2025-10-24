import { standardWeightLogo, Weight } from "@/types";

export function HtmlIcon({ weight = standardWeightLogo }: Weight) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={weight}
      height={weight}
      version="1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <path
        fill="#E44D26"
        d="M27.377 28.889L16.001 32 4.625 28.889 2 0 30.002 0z"
      ></path>
      <path fill="#FF6C39" d="M16 2L16 29.75 25.232 27.008 27.688 2z"></path>
      <path
        fill="#FFF"
        d="M24.363 6L7.607 6 8 10 8.619 17 19.503 17 19.148 20.984 16 21.99 12.857 20.984 12.648 19 8.803 19 9.262 23.987 16 25.99 22.728 23.986 23.718 13 12.252 13 12.002 10 24 10z"
      ></path>
    </svg>
  );
}