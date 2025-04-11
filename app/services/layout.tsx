import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Home Service Business Solutions | SpotCircuit',
  description: 'Automate and optimize your home service business with AI-powered solutions for lead generation, operations, and talent acquisition.',
};

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
