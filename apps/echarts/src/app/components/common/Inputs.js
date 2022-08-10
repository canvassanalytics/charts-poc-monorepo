import React, { useState } from 'react';
import styled from 'styled-components/macro';

export const NumericInput = ({ label, value, setValue }) => {
  const [intermediateValue, setIntermediateValue] = useState(value);
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value);
    }
  };
  return (
    <div>
      <Label>{label}</Label>
      <Input
        autoComplete="off"
        name={label}
        type="number"
        onChange={(event) => setIntermediateValue(event.target.value)}
        onBlur={(event) => setValue(event.target.value)}
        onKeyDown={handleEnter}
        value={intermediateValue}
      />
    </div>
  );
};

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  width: 100px;
`;

export const Toggle = ({ label, isOn, setIsOn }) => (
  <Switch>
    {label}
    <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
  </Switch>
);

const Switch = styled.label`
  display: inline-block;
`;
