import "./ui/global.css";
import {inter} from '@/app/ui/fonts.ts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialias4ed`}>{children}</body>
    </html>
  );
}
