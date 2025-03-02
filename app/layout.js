import { Outfit, Ovo, Archivo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["sans-serif"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["sans-serif"], weight: ["400"]
});



export const metadata = {
  title: "Manas Kolaskar",
  description: "Personal Portfolio of Manas Kolaskar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
