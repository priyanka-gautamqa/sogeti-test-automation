export interface ContactFormData {
  purpose: string;      // option value, e.g. 'Career'
  firstName: string;
  lastName: string;
  jobTitle: string;
  position: string;     // option value
  email: string;
  country: string;      // option value
  phoneNumber: string;
  company: string;
}

export const validContact: ContactFormData = {
  purpose: 'Career',
  firstName: 'Test',
  lastName: 'User',
  jobTitle: 'QA Engineer',
  position: 'Manager',          
  email: 'test.user@example.com',
  country: 'Germany',   
  phoneNumber: '1234567890',        
  company: 'Test Company',
};