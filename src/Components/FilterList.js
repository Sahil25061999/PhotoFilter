import React from 'react';

export default function FilterList({ active, effect, changeOptionIndex }) {
  return (
    <button
      className={`filterButton ${active ? 'active' : ''} `}
      onClick={changeOptionIndex}
    >
      {effect}
    </button>
  );
}
