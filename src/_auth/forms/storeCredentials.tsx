export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: "Researcher" | "Reviewer" | "Admin";
  userPrefix: string;
  userSuffix: string;
};

export const storeCredentials = (user: User): boolean => {
  try {
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkCredentials = (email: string, password: string): User | null => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find(user => user.email === email && user.password === password) || null;
};

export const checkEmail = (email: string): User | null => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find(user => user.email === email) || null;
};



export const loginUser = (email: string, password: string): boolean => {
  const user = checkCredentials(email, password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  } else {
    return false;
  }
};

export const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
};

export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};


const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password123';

export const checkAdminCredentials = (email: string, password: string): User | null => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return {
      firstName: 'Admin',
      lastName: 'User',
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      userType: 'Admin',
      userPrefix: '',
      userSuffix: ''
    };
  }
  return null;
};



export const loginAdmin = (email: string, password: string): boolean => {
  const user = checkAdminCredentials(email, password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  } else {
    return false;
  }
};