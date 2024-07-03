import './globals.css';

export const metadata = {
  title: 'Infinity Petal',
  description: 'Infinity Petal Presale Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
