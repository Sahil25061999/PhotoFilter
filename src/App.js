import React, { useState } from 'react';
import Slider from './Components/Slider';
import FilterList from './Components/FilterList';
import './App.css';

const DEFAULT_VALUE = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  },
];

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_VALUE);
  const selectedOption = options[selectedOptionIndex];

  function changeVal(e) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) {
          return option;
        }
        return { ...option, value: e.target.value };
      });
    });
  }

  function imageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(' ') };
  }

  return (
    <div className="container">
      <div className="imageContainer" style={imageStyle()}></div>
      <div className="filterList">
        {options.map((item, index) => {
          return (
            <FilterList
              key={index}
              effect={item.name}
              active={index === selectedOptionIndex}
              changeOptionIndex={(e) => setSelectedOptionIndex(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        changeVal={changeVal}
      />
    </div>
  );
}

export default App;
