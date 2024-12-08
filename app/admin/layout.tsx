import { AdminHeader } from '@/components/admin/header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 pt-12">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
