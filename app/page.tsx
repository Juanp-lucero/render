import Link from "next/link";
import { events } from "../lib/events";

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        {/* Luces decorativas */}

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-300">

              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

              Comunidad universitaria

            </div>

            {/* TITULO */}

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">

              Todo lo que ocurre en tu universidad,

              <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                en un solo lugar.
              </span>

            </h1>

            {/* DESCRIPCIÓN */}

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Descubre conferencias, talleres, actividades culturales,
              eventos deportivos y proyectos de emprendimiento dentro
              de la comunidad universitaria.
            </p>

            {/* BOTONES */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/csr"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
              >
                Explorar eventos →
              </Link>

              <a
                href="#proximos"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium text-slate-200 backdrop-blur transition hover:border-violet-400/30 hover:bg-violet-400/10"
              >
                Ver próximos eventos
              </a>

            </div>

          </div>

          {/* DECORACIÓN */}

          <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">

            <div className="relative h-80 w-80">

              <div className="absolute inset-0 rounded-[40%] border border-cyan-400/20 bg-cyan-400/5 rotate-12 backdrop-blur-sm" />

              <div className="absolute inset-8 rounded-[35%] border border-violet-400/20 bg-violet-400/5 -rotate-12" />

              <div className="absolute inset-20 flex items-center justify-center rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-7xl shadow-2xl shadow-violet-500/10">
                🎓
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ESTADÍSTICAS */}

      <section className="border-y border-white/[0.06] bg-white/[0.015]">

        <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-3">

          <Stat
            value={String(events.length)}
            label="Eventos disponibles"
          />

          <Stat
            value="4"
            label="Categorías"
          />

          <Stat
            value="1.400+"
            label="Inscripciones"
          />

        </div>

      </section>

      {/* PRÓXIMOS EVENTOS */}

      <section
        id="proximos"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Agenda universitaria
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Próximos eventos
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Conoce algunas de las actividades que próximamente
              estarán disponibles para la comunidad.
            </p>

          </div>

          <Link
            href="/csr"
            className="font-semibold text-cyan-400 transition hover:text-violet-400"
          >
            Ver todos →
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {upcomingEvents.map((event, index) => (

            <article
              key={event.id}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.055]"
            >

              {/* IMAGEN / ICONO */}

              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950/40 to-cyan-950/30">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)]" />

                <span className="relative text-7xl transition duration-300 group-hover:scale-110">
                  {event.emoji}
                </span>

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300 backdrop-blur">
                  Evento {index + 1}
                </span>

              </div>

              <div className="p-6">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {event.category}
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-cyan-300">
                  {event.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                  {event.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-300">
                  <p>📅 {event.date}</p>
                  <p>🕐 {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>

                <Link
                  href={`/ssr/${event.id}`}
                  className="mt-6 block w-full rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-center font-semibold text-violet-300 transition hover:border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:text-slate-950"
                >
                  Ver detalles
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CATEGORÍAS */}

      <section className="border-y border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-10">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              Descubre
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Encuentra algo para ti
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryCard
              icon="🎓"
              title="Académico"
              description="Conferencias, talleres y actividades de formación."
              accent="from-cyan-400/20 to-blue-500/5"
            />

            <CategoryCard
              icon="🎭"
              title="Cultural"
              description="Arte, música, danza y expresión universitaria."
              accent="from-fuchsia-400/20 to-violet-500/5"
            />

            <CategoryCard
              icon="🏆"
              title="Deportes"
              description="Torneos y actividades deportivas."
              accent="from-amber-400/20 to-orange-500/5"
            />

            <CategoryCard
              icon="💡"
              title="Emprendimiento"
              description="Proyectos e ideas desarrolladas por estudiantes."
              accent="from-violet-400/20 to-cyan-500/5"
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/15 via-slate-900 to-cyan-500/10 p-10 text-center md:p-16">

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              UniEvents
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              No te pierdas lo que está pasando
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Explora la agenda universitaria y encuentra actividades
              que conecten con tus intereses.
            </p>

            <Link
              href="/csr"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-violet-500/20 transition hover:-translate-y-1"
            >
              Explorar eventos
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 <span className="text-cyan-400">Uni</span>Events
          </p>

          <p>
            Plataforma universitaria de eventos
          </p>

        </div>

      </footer>

    </main>
  );
}

/* ESTADÍSTICA */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-8 text-center transition hover:bg-violet-500/[0.03]">

      <p className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-3xl font-black text-transparent">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}

/* CATEGORÍA */

function CategoryCard({
  icon,
  title,
  description,
  accent,
}: {
  icon: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className={`group rounded-2xl border border-white/[0.08] bg-gradient-to-br ${accent} p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20`}
    >

      <div className="text-4xl transition duration-300 group-hover:scale-110">
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