import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className={"min-h-full-screen w-full items-center justify-center"}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
