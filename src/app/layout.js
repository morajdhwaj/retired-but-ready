import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { UserIdProvider } from "@/context/UserIdContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RetPro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserIdProvider>
          <div>
            {children}
            <Toaster position="top-right" />
          </div>
        </UserIdProvider>
      </body>
    </html>
  );
}
