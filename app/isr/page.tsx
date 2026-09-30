import Link from "next/link";
import { events } from "../../lib/events";

export const revalidate = 30;

export default function ISRPage() {
  const highlightedEvents = [...events]
    .sort((a, b) => b.registered - a.registered)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}

        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            UNIEVENTS
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Eventos destacados
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Esta sección utiliza Incremental Static Regeneration para
            mantener contenido rápido y permitir su actualización
            periódica sin reconstruir toda la aplicación.
          </p>
        </div>

        {/* INDICADOR ISR */}

        <section className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="font-semibold text-cyan-300">
                Regeneración incremental activa
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Esta página puede regenerarse automáticamente después
                del período establecido.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-950 px-5 py-3">
              <span className="text-sm text-slate-400">
                Revalidación:
              </span>

              <span className="ml-2 font-bold text-cyan-300">
                30 segundos
              </span>
            </div>

          </div>
        </section>

        {/* EVENTOS DESTACADOS */}

        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Tendencias
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Eventos con mayor participación
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlightedEvents.map((event) => {
              const percentage = Math.round(
                (event.registered / event.capacity) * 100
              );

              return (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  {/* ICONO */}

                  <div className="flex h-40 items-center justify-center bg-slate-900 text-6xl">
                    {event.emoji}
                  </div>

                  <div className="p-5">

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {event.category}
                    </span>

                    <h3 className="mt-4 text-lg font-bold">
                      {event.title}
                    </h3>

                    <div className="mt-4 space-y-2 text-sm text-slate-400">
                      <p>
                        📅 {event.date}
                      </p>

                      <p>
                        📍 {event.location}
                      </p>
                    </div>

                    {/* PARTICIPACIÓN */}

                    <div className="mt-5">

                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-slate-400">
                          Participación
                        </span>

                        <span className="text-slate-300">
                          {event.registered} / {event.capacity}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>

                    </div>

                    {/* DETALLE */}

                    <Link
                      href={`/ssr/${event.id}`}
                      className="mt-5 block w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      Ver evento
                    </Link>

                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXPLICACIÓN TÉCNICA */}

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="font-semibold text-cyan-300">
            ¿Cómo funciona ISR?
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Next.js genera inicialmente la página de forma estática.
            Después del tiempo definido en <strong>revalidate</strong>,
            una nueva solicitud puede provocar que Next.js genere una
            versión actualizada de la página.
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/70 p-4">
            <code className="text-sm text-cyan-300">
              export const revalidate = 30;
            </code>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">
                1. Generación
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Se genera una versión estática de la página.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">
                2. Revalidación
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Después de 30 segundos, la página puede actualizarse.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="font-semibold">
                3. Actualización
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Next.js genera una nueva versión con los datos actuales.
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