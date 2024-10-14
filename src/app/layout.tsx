"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./components/Button";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang='en'>
      <body className='w-auto h-max'>
        {pathName !== "/login" && (
          <header className='bg-gray-800 text-white'>
            <nav className='container mx-auto flex justify-between items-center p-4'>
              {/* Left Side: Navigation Links */}
              <div className='flex space-x-4'>
                <Link
                  href='/'
                  className='text-lg font-semibold hover:text-gray-300'
                >
                  Home
                </Link>
                <Link
                  href='/dashboard'
                  className='text-lg font-semibold hover:text-gray-300'
                >
                  Dashboard
                </Link>
              </div>

              <LogoutButton />
              {/* Right Side: Profile Dropdown */}
            </nav>
          </header>
        )}

        {/* Main Content */}
        <main className='h-auto'>
          {modal}
          {children}
        </main>
      </body>
    </html>
  );
}
