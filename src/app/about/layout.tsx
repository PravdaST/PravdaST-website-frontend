import { aboutMetadata } from "../services/metadata";

export const metadata = aboutMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}