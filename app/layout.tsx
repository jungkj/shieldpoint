import { NavbarWrapper } from '@/components/layout/NavbarWrapper';
import './globals.css';

export const metadata = {
  title: 'ShieldPoint',
  description: 'Modern Risk and Control Self-Assessment Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}