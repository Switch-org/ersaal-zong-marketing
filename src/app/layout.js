import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins",
});
const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--manrope",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${poppins.variable} ${manrope.variable}`}>
       
       

        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PG8771TMK4"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PG8771TMK4');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
