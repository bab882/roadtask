import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import SideBar from "./Components/SideBar/SideBar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { auth } from '@clerk/nextjs/server';




const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Road Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <ClerkProvider >
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body className={nunito.className}>
          <ContextProvider>
            <GlobalStyleProvider>
             {/* {userId ? <SideBar /> : null}  */}
              
              <SideBar />
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
