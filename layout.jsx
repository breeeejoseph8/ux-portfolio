import './globals.css';

export const metadata = {
  title: 'Breanna Joseph | UX Portfolio',
  description: 'UX portfolio focused on operational systems, technical workflows, and enterprise UX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
