export interface User {
  email?: string;
  first_name?: string;
  last_name?: string;
  message?: string;
  status?: string;
  jwt?: string;
  password?: string
};

export interface AuthUser {
  user: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  };
};
