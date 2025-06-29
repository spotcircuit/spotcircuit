import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>      <main className="min-h-[calc(100vh-200px)]">
        {children}
      </main>    </>
  );
}
