
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}


      {children}
    </section>
  );
}
