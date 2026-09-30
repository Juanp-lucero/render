import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniEvents",
  description: "Plataforma universitaria de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}

            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              <span className="text-cyan-400">Uni</span>
              Events
            </Link>

            {/* MENÚ PÚBLICO */}

            <div className="hidden items-center gap-2 md:flex">

              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Eventos
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Categorías
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Comunidad
              </Link>

            </div>

            {/* BOTÓN */}

            <Link
              href="/csr"
              className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Explorar eventos
            </Link>

          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}