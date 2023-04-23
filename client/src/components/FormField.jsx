import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#fff]"
      >
        {labelName}
      </label>
    </div>
    <div className='sm:flex items-center gap-2 mb-2'>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />{isSurpriseMe && (
      <button
        type="button"
        onClick={handleSurpriseMe}
        className="button-86"
      >
        ✨ Surprise me
      </button>
    )}</div>
  </div>
);

export default FormField;
