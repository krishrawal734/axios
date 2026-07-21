export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface UserState {
  loading: boolean;
  users: User[];
  error: string;
}
