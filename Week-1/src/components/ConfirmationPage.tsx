import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormDataContext';
import { Check, ArrowLeft } from 'lucide-react';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const { formData } = useFormData();

  if (!formData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No Form Data Found</h2>
          <p className="text-gray-600 mb-6">
            You need to complete the registration form first.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go to Registration Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="text-green-600" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Successful!</h1>
          <p className="text-gray-600">Thank you for registering. Here's the information you provided:</p>
        </div>
        
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">First Name</p>
                <p className="text-gray-900">{formData.firstName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Last Name</p>
                <p className="text-gray-900">{formData.lastName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Username</p>
                <p className="text-gray-900">{formData.username}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{formData.email}</p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Phone Number</p>
                <p className="text-gray-900">{formData.phoneCountryCode} {formData.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Country</p>
                <p className="text-gray-900">{formData.country}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">City</p>
                <p className="text-gray-900">{formData.city}</p>
              </div>
            </div>
          </div>
          
          {/* Identification Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Identification Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">PAN Number</p>
                <p className="text-gray-900">{formData.panNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Aadhar Number</p>
                <p className="text-gray-900">{formData.aadharNumber}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;