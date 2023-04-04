import React from 'react';

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div className="select-sotr">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MySelect;
