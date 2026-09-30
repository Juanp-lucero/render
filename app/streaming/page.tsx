import Link from "next/link";
import { Suspense } from "react";
import { events } from "../../lib/events";

async function Stats() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-slate-400">Eventos</p>
        <p className="mt-2 text-3xl font-bold text-cyan-400">
          {events.length}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-slate-400">Inscritos</p>
        <p className="mt-2 text-3xl font-bold text-cyan-400">
          {events.reduce((total, event) => total + event.registered, 0)}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-slate-400">Categorías</p>
        <p className="mt-2 text-3xl font-bold text-cyan-400">
          4
        </p>
      </div>
    </section>
  );
}

async function FeaturedEvents() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">
        Eventos destacados
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {events.slice(0, 4).map((event) => (
          <Link
            key={event.id}
            href={`/ssr/${event.id}`}
            className="rounded-xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-cyan-400/40"
          >
            <div className="text-4xl">
              {event.emoji}
            </div>

            <h3 className="mt-3 font-bold">
              {event.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {event.date} · {event.location}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

async function RecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 3500));

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">
        Actividad reciente
      </h2>

      <div className="mt-5 space-y-3">
        <div className="rounded-xl bg-slate-950/50 p-4">
          🎓 Nueva conferencia académica registrada
        </div>

        <div className="rounded-xl bg-slate-950/50 p-4">
          💡 Nueva feria de emprendimiento disponible
        </div>

        <div className="rounded-xl bg-slate-950/50 p-4">
          🏆 Se actualizaron los cupos del torneo
        </div>
      </div>
    </section>
  );
}

function LoadingBlock({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

        <p className="text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function StreamingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}

        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            UNIEVENTS
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Dashboard en tiempo progresivo
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Esta página utiliza Streaming SSR para entregar diferentes
            partes de la interfaz progresivamente.
          </p>
        </div>

        {/* ESTADÍSTICAS */}

        <Suspense
          fallback={
            <LoadingBlock text="Cargando estadísticas..." />
          }
        >
          <Stats />
        </Suspense>

        {/* EVENTOS */}

        <div className="mt-6">
          <Suspense
            fallback={
              <LoadingBlock text="Cargando eventos destacados..." />
            }
          >
            <FeaturedEvents />
          </Suspense>
        </div>

        {/* ACTIVIDAD */}

        <div className="mt-6">
          <Suspense
            fallback={
              <LoadingBlock text="Cargando actividad reciente..." />
            }
          >
            <RecentActivity />
          </Suspense>
        </div>

        {/* EXPLICACIÓN */}

        <section className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="font-semibold text-cyan-300">
            Streaming SSR
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            La página no necesita esperar a que todas las operaciones
            terminen. Cada sección se procesa de manera independiente
            y puede enviarse al navegador cuando está lista.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">1 segundo</p>
              <p className="mt-2 text-sm text-slate-500">
                Estadísticas
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">2 segundos</p>
              <p className="mt-2 text-sm text-slate-500">
                Eventos destacados
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">3.5 segundos</p>
              <p className="mt-2 text-sm text-slate-500">
                Actividad reciente
              </p>
            </div>
          </div>
        </section>

        {/* NAVEGACIÓN */}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-300 transition hover:bg-white/10"
          >
            ← Inicio
          </Link>

          <Link
            href="/csr"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explorar eventos →
          </Link>
        </div>

      </div>
    </main>
  );
}