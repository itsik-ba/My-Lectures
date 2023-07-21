import React, { useState } from 'react';
import Select, { ValueType, StylesConfig } from 'react-select';
import './style/register.scss'

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: Option[];
  onChange: (selectedOptions: Option[]) => void;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, className }) => {
  const handleChange = (selectedOptions: ValueType<Option>) => {
    onChange(selectedOptions as Option[]);
  };

  const customStyles: StylesConfig<Option> = {
    option: (provided, state) => ({
      ...provided,
      color: '#FFFFFF',
      backgroundColor: state.isFocused ? '#e3e3e3' : 'transparent',
      ':hover': {
        backgroundColor: '#451258',
      },
      // Add classname to each option if available
      className: state.data.className,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#D0CBCB',
      color: '#fff',
      margin: '2px',
      padding: '2px 5px',
      borderRadius: '5px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#451258',
      border: '1px solid #ccc',
      borderRadius: '5px',
      color: '#FFFFFF',
    }),
    valueContainer: (provided) => ({
      ...provided,
      border: '1px solid #D0CBCB',
      borderRadius: '5px',
      backgroundColor: '#fff',
      padding: '5px',
      
    }),
    // Custom styles for the hover list (options list)
    menuList: (provided) => ({
      ...provided,
      ':hover': {
        backgroundColor: '#e3e3e3',
      },
    }),
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      classNamePrefix="custom-multiselect" // Custom class prefix for the MultiSelect component
      isMulti
      styles={customStyles} // Use the custom styles
    />
  );
};

export default MultiSelect;






// import React from 'react';
// import Select, { ValueType } from 'react-select';


// interface SelectOption {
//   value: string;
//   label: string;
//   className?: string;
// }

// interface MultiSelectProps {
//   options: SelectOption[];
//   value: SelectOption[];
//   onChange: (selectedOptions: SelectOption[]) => void;
//   className?: string;
// }

// const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, className }) => {
//   const handleChange = (selectedOptions: ValueType<SelectOption>) => {
//     onChange(selectedOptions as SelectOption[]);
//   };

//   const customOptionRenderer = (option: SelectOption) => (
//     <div className={option.className}>
//       {option.label}
//     </div>
//   );

//   return (
//     <Select
//       options={options}
//       value={value}
//       onChange={handleChange}
//       className={className}
//       classNamePrefix="register__card__form__select__options"
//       isMulti
//       getOptionLabel={(option) => option.label} 
//       getOptionValue={(option) => option.value} 
//       components={{ Option: customOptionRenderer }} 
//       // styles={{ option: (provided) => ({ ...provided, cursor: 'pointer' }) }} // Optional styling for the option container
//     />
//   );
// };

// export default MultiSelect;
