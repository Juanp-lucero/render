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
      <body className="bg-[#050816] text-white">

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/85 backdrop-blur-xl">

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}

            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Uni
              </span>
              Events
            </Link>

            {/* MENÚ */}

            <div className="hidden items-center gap-1 md:flex">

              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Eventos
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Categorías
              </Link>

              <Link
                href="/csr"
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Comunidad
              </Link>

            </div>

            {/* BOTÓN PRINCIPAL */}

            <Link
              href="/csr"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-violet-500/10 transition hover:-translate-y-0.5 hover:shadow-violet-500/20"
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