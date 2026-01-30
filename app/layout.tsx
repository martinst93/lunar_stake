import type { Metadata } from "next";
import "./styles/global.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Lunar Stake Casino - Premium Gaming Experience",
  description:
    "Experience the best in online casino gaming with slots, table games, and live dealer action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
