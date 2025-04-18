import { Timestamp } from "firebase/firestore";

export interface AuthFormProps {
  confirmPassword: string;
  displayName: string;
  email: string;
  password: string;
}

export interface User {
  uid: string;
  displayName: string;
  email: string;
}

export interface CreateUser extends User {
  createdAt: Timestamp;
  profilePicture: string;
}

export interface AuthContextType {
  signIn: (value: AuthFormProps) => void;
  signOut: () => void;
  session: {
    token: string | undefined;
    user: User;
  } | null;
  isLoading: boolean;
}
