import React, { InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onPasswordVisibilityToggle?: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  showPasswordToggle = false,
  isPasswordVisible = false,
  onPasswordVisibilityToggle,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={props.id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
          }`}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onPasswordVisibilityToggle}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isPasswordVisible ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 transition-opacity duration-200 ease-in-out">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;