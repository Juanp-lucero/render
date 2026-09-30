import Link from "next/link";
import { events } from "../lib/events";

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Comunidad universitaria
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
              Todo lo que ocurre en tu universidad,
              <span className="text-cyan-400"> en un solo lugar.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Descubre conferencias, talleres, actividades culturales,
              eventos deportivos y proyectos de emprendimiento dentro
              de la comunidad universitaria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/csr"
                className="rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explorar eventos
              </Link>

              <a
                href="#proximos"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-medium text-slate-200 transition hover:bg-white/10"
              >
                Ver próximos eventos
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ESTADÍSTICAS */}

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-3">

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-cyan-400">
              {events.length}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Eventos disponibles
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-cyan-400">
              4
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Categorías
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-bold text-cyan-400">
              1.400+
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Inscripciones
            </p>
          </div>

        </div>
      </section>

      {/* PRÓXIMOS EVENTOS */}

      <section
        id="proximos"
        className="mx-auto max-w-7xl px-6 py-20"
      >

        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Agenda universitaria
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Próximos eventos
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Conoce algunas de las actividades que próximamente
              estarán disponibles para la comunidad.
            </p>
          </div>

          <Link
            href="/csr"
            className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Ver todos →
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >

              <div className="flex h-48 items-center justify-center bg-slate-900 text-7xl">
                {event.emoji}
              </div>

              <div className="p-6">

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {event.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {event.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-300">
                  <p>📅 {event.date}</p>
                  <p>🕐 {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>

                <Link
                  href={`/ssr/${event.id}`}
                  className="mt-6 block w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  Ver detalles
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CATEGORÍAS */}

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Descubre
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Encuentra algo para ti
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryCard
              icon="🎓"
              title="Académico"
              description="Conferencias, talleres y actividades de formación."
            />

            <CategoryCard
              icon="🎭"
              title="Cultural"
              description="Arte, música, danza y expresión universitaria."
            />

            <CategoryCard
              icon="🏆"
              title="Deportes"
              description="Torneos y actividades deportivas."
            />

            <CategoryCard
              icon="💡"
              title="Emprendimiento"
              description="Proyectos e ideas desarrolladas por estudiantes."
            />

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center md:p-14">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            UniEvents
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            No te pierdas lo que está pasando
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explora la agenda universitaria y encuentra actividades
            que conecten con tus intereses.
          </p>

          <Link
            href="/csr"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explorar eventos
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 UniEvents
          </p>

          <p>
            Plataforma universitaria de eventos
          </p>

        </div>
      </footer>

    </main>
  );
}

function CategoryCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}