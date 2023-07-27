import MyProfilePic from "./components/MyProfilePic";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Niklas's Blog",
  description: "Created by Niklas Fulle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
