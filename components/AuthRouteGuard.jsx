// AuthRouteGuard.js
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRouteGuard = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/"); // Redirect to the root route if no user is logged in
    }
  }, [session, router]);

  return children;
};

export default AuthRouteGuard;
