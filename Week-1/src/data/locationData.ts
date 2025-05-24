import { CountryData } from '../types/formTypes';

export const countries: CountryData[] = [
  {
    name: 'India',
    code: 'IN',
    phoneCode: '+91',
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur']
  },
  {
    name: 'United States',
    code: 'US',
    phoneCode: '+1',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas']
  },
  {
    name: 'United Kingdom',
    code: 'UK',
    phoneCode: '+44',
    cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh', 'Bristol']
  },
  {
    name: 'Canada',
    code: 'CA',
    phoneCode: '+1',
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Quebec City', 'Winnipeg', 'Hamilton']
  },
  {
    name: 'Australia',
    code: 'AU',
    phoneCode: '+61',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong']
  }
];

export const getCountryByCode = (code: string): CountryData | undefined => {
  return countries.find(country => country.code === code);
};

export const getCountryByName = (name: string): CountryData | undefined => {
  return countries.find(country => country.name === name);
};

export const getCitiesByCountry = (countryName: string): string[] => {
  const country = getCountryByName(countryName);
  return country ? country.cities : [];
};