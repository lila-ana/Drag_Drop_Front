import { auth, provider } from "@/services/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState, FormEvent } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed in:", userCredential.user);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential ? credential.accessToken : null;
      // The signed-in user info.
      const user = result.user;
      console.log("Signed in with Google:", user);
    } catch (error: any) {
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      setError(errorMessage);
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <form onSubmit={handleGoogleLogin}>
        <button type="submit">Sign In with Google</button>
      </form>
    </div>
  );
};

export default Login;
