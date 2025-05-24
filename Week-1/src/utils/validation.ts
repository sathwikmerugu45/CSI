export const validateRequired = (value: string): string | undefined => {
  return value.trim() === '' ? 'This field is required' : undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (email.trim() === '') return 'Email is required';
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !emailRegex.test(email) ? 'Please enter a valid email address' : undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (password.trim() === '') return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return !passwordRegex.test(password) 
    ? 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
    : undefined;
};

export const validateUsername = (username: string): string | undefined => {
  if (username.trim() === '') return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return !usernameRegex.test(username) 
    ? 'Username can only contain letters, numbers, and underscores, and must be between 3-20 characters' 
    : undefined;
};

export const validatePhoneNumber = (phoneNumber: string): string | undefined => {
  if (phoneNumber.trim() === '') return 'Phone number is required';
  
  const phoneRegex = /^\d{10}$/;
  return !phoneRegex.test(phoneNumber) ? 'Please enter a valid 10-digit phone number' : undefined;
};

export const validatePanNumber = (panNumber: string): string | undefined => {
  if (panNumber.trim() === '') return 'PAN number is required';
  
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return !panRegex.test(panNumber) ? 'Please enter a valid PAN number (e.g., ABCDE1234F)' : undefined;
};

export const validateAadharNumber = (aadharNumber: string): string | undefined => {
  if (aadharNumber.trim() === '') return 'Aadhar number is required';
  
  const aadharRegex = /^\d{12}$/;
  return !aadharRegex.test(aadharNumber) ? 'Please enter a valid 12-digit Aadhar number' : undefined;
};