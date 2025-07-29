
import { ReactNode } from "react";

interface CalculatorsLayoutProps {
  children: ReactNode;
}

export default function CalculatorsLayout({ children }: CalculatorsLayoutProps) {
  return <>{children}</>;
}
