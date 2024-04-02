export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="text-xl bg-zinc-800 w-full p-4 text-right">Inner Layout Item</nav>
      {children}
    </>
  );
}
