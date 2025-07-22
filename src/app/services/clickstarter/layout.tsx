import { clickstarterMetadata } from "../metadata";

export const metadata = clickstarterMetadata;

export default function ClickstarterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}