import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "WikiRocket!",
  description: "WikiRocket!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
