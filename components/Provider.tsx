"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
  session: any;
}

const Provider = ({ children, session }: ProviderProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
