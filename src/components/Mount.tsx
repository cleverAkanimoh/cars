"use client";

import React from "react";
import { NavBar, Footer } from ".";
import Loading from "@/app/(overview)/loading";

type MountProps = { children: React.ReactNode };

export default function Mount({ children }: MountProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
