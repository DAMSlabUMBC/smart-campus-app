import {
  useState,
  useContext,
  createContext,
  type PropsWithChildren,
} from "react";
import { useStorageState, setStorageItemAsync } from "@/hooks/useStorageState";
import * as Google from "expo-auth-session";
import { AuthContextType } from "@/constants/AuthTypes";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";

const AuthContext = createContext<AuthContextType>({
  signIn: (value) => null,
  signOut: () => null,
  session: {
    token: "",
    user: {
      uid: "",
      displayName: "",
      email: "",
    },
  },
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState<AuthContextType["session"]>("session");

  const getUser = async (token: string | undefined) => {
    if (!token) return; // If no token, return
    try {
      // Fetch user data
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.json(); // Return user data
    } catch (error) {
      console.error("Error retrieving user data from AsyncStorage: ", error); // Log error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: async (value) => {
          try {
            // If response is successful, get user data
            if (response?.type === "success") {
              const { id_token } = response.params; // Get id_token from response
              const { id, name, email } = await getUser(id_token); // Get user data
              setSession({
                token: id_token, // Set token in session
                user: {
                  uid: id,
                  displayName: name ?? "",
                  email: email ?? "",
                },
              });
            }
          } catch (error) {
            console.error("Error signing in: ", error); // Log error
          }
        },
        signOut: () => {
          try {
            setSession(null);
          } catch (error) {
            console.error("Error signing out: ", error); // Log error
          }
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
