import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { FormData } from '../types/formTypes';

interface FormDataContextType {
  formData: FormData | null;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

interface FormDataProviderProps {
  children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData | null>(() => {
    const savedData = localStorage.getItem('registrationFormData');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (formData) {
      localStorage.setItem('registrationFormData', JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};