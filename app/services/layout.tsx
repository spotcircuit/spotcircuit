import { Metadata } from 'next';
import Script from 'next/script';
import { servicesMetadata } from './page-metadata';

export const metadata: Metadata = servicesMetadata;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
