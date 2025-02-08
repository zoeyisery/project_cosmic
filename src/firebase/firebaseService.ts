import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

export const signUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  console.log("📢 회원가입 요청:", { name, email, password });

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      await updateProfile(user, {
        displayName: name,
      });
    }
    console.log("user:", user);
    return user;
  } catch (error) {
    console.error("❌ Firebase Signup Error:", error);
    throw error;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
