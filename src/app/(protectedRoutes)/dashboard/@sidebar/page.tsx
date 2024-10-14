// app/dashboard/@sidebar/page.tsx
import Link from "next/link";

export default function SidebarPage() {
  return (
    <nav className='space-y-4'>
      <Link
        href='/dashboard/profile'
        className='block p-2 text-blue-600 hover:bg-blue-100 rounded'
      >
        Profile
      </Link>
    </nav>
  );
}
