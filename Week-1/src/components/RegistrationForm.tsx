import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import PhoneInput from './PhoneInput';
import { countries, getCitiesByCountry } from '../data/locationData';
import { FormData, FormErrors } from '../types/formTypes';
import { useFormData } from '../context/FormDataContext';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validateUsername,
  validatePhoneNumber,
  validatePanNumber,
  validateAadharNumber
} from '../utils/validation';
import { User, Lock, Mail, Phone, MapPin, CreditCard, FileText } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData: savedFormData, setFormData } = useFormData();

  const [formValues, setFormValues] = useState<FormData>(() => {
    return savedFormData || {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phoneCountryCode: '',
      phoneNumber: '',
      country: '',
      city: '',
      panNumber: '',
      aadharNumber: ''
    };
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (formValues.country) {
      const cities = getCitiesByCountry(formValues.country);
      setAvailableCities(cities);

      if (formValues.city && !cities.includes(formValues.city)) {
        setFormValues((prev) => ({ ...prev, city: '' }));
      }
    } else {
      setAvailableCities([]);
    }
  }, [formValues.country]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const firstNameError = validateRequired(formValues.firstName);
    if (firstNameError) newErrors.firstName = firstNameError;

    const lastNameError = validateRequired(formValues.lastName);
    if (lastNameError) newErrors.lastName = lastNameError;

    const usernameError = validateUsername(formValues.username);
    if (usernameError) newErrors.username = usernameError;

    const emailError = validateEmail(formValues.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formValues.password);
    if (passwordError) newErrors.password = passwordError;

    if (!formValues.phoneCountryCode) {
      newErrors.phoneCountryCode = 'Country code is required';
    }

    const phoneError = validatePhoneNumber(formValues.phoneNumber);
    if (phoneError) newErrors.phoneNumber = phoneError;

    if (!formValues.country) {
      newErrors.country = 'Country is required';
    }

    if (!formValues.city) {
      newErrors.city = 'City is required';
    }

    const panError = validatePanNumber(formValues.panNumber);
    if (panError) newErrors.panNumber = panError;

    const aadharError = validateAadharNumber(formValues.aadharNumber);
    if (aadharError) newErrors.aadharNumber = aadharError;

    setErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsValid(valid);
    return valid;
  };

  useEffect(() => {
    if (formTouched) {
      validateForm();
    }
  }, [formValues, formTouched]);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormValues((prev) => {
    const updated = { ...prev, [name]: value };
    localStorage.setItem('registrationFormData', JSON.stringify(updated));
    return updated;
  });

  if (!formTouched) {
    setFormTouched(true);
  }

  if (errors[name as keyof FormErrors]) {
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData(formValues);
      navigate('/success');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid = (): boolean => {
    return formTouched && isValid;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Form</h1>
          <p className="text-gray-600">Please fill in all the required information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <User className="mr-2" size={20} />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <FormInput
                id="firstName"
                name="firstName"
                type="text"
                label="First Name"
                value={formValues.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="John"
                required
              />

              <FormInput
                id="lastName"
                name="lastName"
                type="text"
                label="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Doe"
                required
              />
            </div>

            <FormInput
              id="username"
              name="username"
              type="text"
              label="Username"
              value={formValues.username}
              onChange={handleChange}
              error={errors.username}
              placeholder="johndoe123"
              required
            />

            <FormInput
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={formValues.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john.doe@example.com"
              required
              icon={Mail}
            />

            <FormInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={formValues.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••"
              required
              showPasswordToggle
              isPasswordVisible={showPassword}
              onPasswordVisibilityToggle={togglePasswordVisibility}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Phone className="mr-2" size={20} />
              Contact Information
            </h2>

            <PhoneInput
              countryCode={formValues.phoneCountryCode}
              phoneNumber={formValues.phoneNumber}
              onCountryCodeChange={handleChange}
              onPhoneNumberChange={handleChange}
              countryCodeError={errors.phoneCountryCode}
              phoneNumberError={errors.phoneNumber}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <FormSelect
                id="country"
                name="country"
                label="Country"
                value={formValues.country}
                onChange={handleChange}
                error={errors.country}
                options={countries.map((country) => ({
                  value: country.name,
                  label: country.name
                }))}
                required
              />

              <FormSelect
                id="city"
                name="city"
                label="City"
                value={formValues.city}
                onChange={handleChange}
                error={errors.city}
                options={availableCities.map((city) => ({
                  value: city,
                  label: city
                }))}
                disabled={!formValues.country}
                required
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <CreditCard className="mr-2" size={20} />
              Identification Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <FormInput
                id="panNumber"
                name="panNumber"
                type="text"
                label="PAN Number"
                value={formValues.panNumber}
                onChange={handleChange}
                error={errors.panNumber}
                placeholder="ABCDE1234F"
                required
              />

              <FormInput
                id="aadharNumber"
                name="aadharNumber"
                type="text"
                label="Aadhar Number"
                value={formValues.aadharNumber}
                onChange={handleChange}
                error={errors.aadharNumber}
                placeholder="1234 5678 9012"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-colors ${
              isFormValid()
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isFormValid()}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
