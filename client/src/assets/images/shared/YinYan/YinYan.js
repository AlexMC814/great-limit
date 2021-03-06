import React from 'react';

const YinYan = ({ title, width, height, fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 433 433'>
      <title id={title}>Background yin yan shape</title>
      <g>
        <circle cx='216.5' cy='116.5' r='40.5' />
        <path
          d='M369.6,63.4C328.7,22.5,274.3,0,216.5,0S104.3,22.5,63.4,63.4C22.5,104.3,0,158.7,0,216.5s22.5,112.2,63.4,153.1
		c40.9,40.9,95.3,63.4,153.1,63.4s112.2-22.5,153.1-63.4c40.9-40.9,63.4-95.3,63.4-153.1S410.5,104.3,369.6,63.4z M176,316.5
		c0-22.4,18.1-40.5,40.5-40.5s40.5,18.1,40.5,40.5S238.9,357,216.5,357S176,338.9,176,316.5z M219.1,416.5
		c54-1.4,97.4-45.6,97.4-100c0-55.2-44.8-100-100-100c-55.2,0-100-44.8-100-100c0-52.6,40.6-95.7,92.2-99.7c0.2,0,6.8-0.3,7.7-0.3
		c0,0,0,0,0,0c110.5,0,200,89.5,200,200C416.5,326.1,328.4,415.1,219.1,416.5z'
        />
      </g>
    </svg>
  );
};

export default YinYan;
