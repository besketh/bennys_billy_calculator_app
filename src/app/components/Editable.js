'use client'
import { useState } from 'react';

export  default function Editable ({fieldName,updateValueForParent}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    updateValueForParent(e.target.value);
    };   

  return (
    <> 
        <label htmlFor={fieldName}>
          <b>{fieldName}</b>:<br/>
          <input
            type="text"
            id={fieldName}
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
       </>
  );
};

