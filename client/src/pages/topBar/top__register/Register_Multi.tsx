import React from 'react';
import Select, { ValueType, OptionTypeBase } from 'react-select';

interface MultiSelectProps {
  options: { value: string; label: string }[];
  onChange: (selectedOptions: ValueType<OptionTypeBase>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange }) => {
  return (
    <Select
      isMulti
      options={options}
      onChange={onChange}
    />
  );
};

export default MultiSelect;
