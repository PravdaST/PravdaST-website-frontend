import { seoStruktorMetadata } from "../metadata";

export const metadata = seoStruktorMetadata;

export default function SeoStruktorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}