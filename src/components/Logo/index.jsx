import React from "react";

const Logo = ({className}) => {
  return (
    <>
      <svg
        className={`w-32 h-[52px] ${className}`}
        viewBox="0 0 130 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          y="2.88892"
          width="42.6667"
          height="44.7778"
          rx="5.88506"
          fill="url(#paint0_linear_1_38)"
        />
        <path
          d="M32.1712 39H25.3112L16.1762 25.21V39H9.3162V14.325H16.1762L25.3112 28.29V14.325H32.1712V39Z"
          fill="white"
        />
        <path
          d="M38.2529 15.4446C29.9095 17.49 26.5705 23.3991 26.5705 25.6718C26.2808 29.0808 26.7443 37.9444 27.4396 32.4899C28.1349 27.0354 35.0662 17.4332 38.2529 15.4446Z"
          fill="white"
        />
        <path
          d="M2.94263 39C10.2432 37.1119 13.1647 31.6574 13.1647 29.5595C13.4182 26.4127 13.0126 18.2309 12.4043 23.2659C11.7959 28.3008 5.73103 37.1644 2.94263 39Z"
          fill="white"
        />
        <path
          d="M54.9579 19.82V23.845H62.8329V29.06H54.9579V33.505H63.8829V39H48.0979V14.325H63.8829V19.82H54.9579ZM84.0027 14.325V19.785H74.1327V24.125H81.4127V29.34H74.1327V39H67.2727V14.325H84.0027ZM102.502 34.975H93.7519L92.4219 39H85.2119L94.2069 14.325H102.117L111.077 39H103.832L102.502 34.975ZM100.787 29.725L98.1269 21.745L95.5019 29.725H100.787Z"
          fill="#222222"
        />
        <path
          d="M120.345 4.33325L122.776 10.7827L129.345 13.1692L122.776 15.5557L120.345 22.0051L117.914 15.5557L111.345 13.1692L117.914 10.7827L120.345 4.33325Z"
          fill="url(#paint1_linear_1_38)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_38"
            x1="-6.62069"
            y1="-1.44442"
            x2="45.3705"
            y2="51.5121"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#468EF9" />
            <stop offset="1" stop-color="#0C66EE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_38"
            x1="114.345"
            y1="5.80591"
            x2="126.077"
            y2="20.7431"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#A239F4" />
            <stop offset="1" stop-color="#E0B9FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Logo;
