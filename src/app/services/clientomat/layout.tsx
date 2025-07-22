import { clientomatMetadata } from "../metadata";

export const metadata = clientomatMetadata;

export default function ClientomatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}