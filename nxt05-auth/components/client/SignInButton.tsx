"use client"

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
    const { data: session } = useSession();
    return session ? null : <button onClick={() => signIn("github")}>Přihlásit</button>
}

export default SignInButton;