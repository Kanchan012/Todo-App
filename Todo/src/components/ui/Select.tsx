import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
