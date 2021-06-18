import React from 'react';

const Slider = ({ min, max, value, changeVal }) => {
  return (
    <div className="sliderContainer">
      <input
        type="range"
        className="sliderInput"
        onChange={changeVal}
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
};

export default Slider;
