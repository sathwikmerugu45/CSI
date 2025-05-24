import React from 'react';
import { countries } from '../data/locationData';

interface PhoneInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCodeError?: string;
  phoneNumberError?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  countryCodeError,
  phoneNumberError,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="phoneCountryCode"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Phone Number
      </label>
      <div className="flex space-x-2">
        <div className="w-1/3">
          <select
            id="phoneCountryCode"
            name="phoneCountryCode"
            value={countryCode}
            onChange={onCountryCodeChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 appearance-none bg-white ${
              countryCodeError
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
            }`}
          >
            <option value="">Code</option>
            {countries.map((country) => (
              <option key={country.code} value={country.phoneCode}>
                {country.phoneCode} ({country.code})
              </option>
            ))}
          </select>
          {countryCodeError && (
            <p className="mt-1 text-sm text-red-600">{countryCodeError}</p>
          )}
        </div>
        <div className="w-2/3">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            placeholder="Phone Number"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
              phoneNumberError
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
            }`}
          />
          {phoneNumberError && (
            <p className="mt-1 text-sm text-red-600">{phoneNumberError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
