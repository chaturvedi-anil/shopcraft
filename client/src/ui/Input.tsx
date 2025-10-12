import clsx from "clsx";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  {
    label?: string;
    name?: string;
    type: string;
    placeholder?: string;
    className?: string;
    error?: string;
  }
>(({ label, type, placeholder, error, className, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={clsx(
          className,
          `w-full px-3 py-2 border rounded-md focus:outline-none 
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-blue-500"}
        `
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
