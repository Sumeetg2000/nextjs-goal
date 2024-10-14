// app/dashboard/layout.tsx

export default function DashboardLayout({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='w-1/4 bg-gray-200 p-4'>{sidebar}</aside>

      {/* Main Content */}
      <main className='flex-1 p-6'>{main}</main>
    </div>
  );
}
