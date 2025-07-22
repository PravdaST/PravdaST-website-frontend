import { trendlabMetadata } from "../metadata";

export const metadata = trendlabMetadata;

export default function TrendlabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}