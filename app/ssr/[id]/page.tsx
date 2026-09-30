import Link from "next/link";
import { getEventById } from "../../../lib/events";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const eventId = Number(id);

  const event = await getEventById(eventId);

  if (!event) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">

          <div className="text-7xl">
            🔎
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            Evento no encontrado
          </h1>

          <p className="mt-4 text-slate-400">
            No existe ningún evento asociado al identificador {id}.
          </p>

          <Link
            href="/csr"
            className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
          >
            Volver a eventos
          </Link>

        </div>
      </main>
    );
  }

  const availableSeats = event.capacity - event.registered;

  const percentage = Math.round(
    (event.registered / event.capacity) * 100
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/csr"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a eventos
        </Link>

        <article className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          <div className="flex h-80 items-center justify-center bg-slate-900 text-9xl">
            {event.emoji}
          </div>

          <div className="p-8 md:p-10">

            <span className="rounded-full bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
              {event.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {event.description}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">

              <Info
                icon="📅"
                title="Fecha"
                value={event.date}
              />

              <Info
                icon="🕐"
                title="Hora"
                value={event.time}
              />

              <Info
                icon="📍"
                title="Lugar"
                value={event.location}
              />

            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Inscritos
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {event.registered}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-slate-500">
                    Cupos disponibles
                  </p>

                  <p className="mt-1 text-2xl font-bold text-emerald-400">
                    {availableSeats}
                  </p>
                </div>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-purple-400"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button className="rounded-xl bg-purple-500 px-7 py-3 font-semibold hover:bg-purple-400">
                Inscribirme
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-slate-300 hover:bg-white/10">
                Compartir
              </button>

            </div>

          </div>

        </article>

        <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-6">

          <p className="font-semibold text-purple-300">
            SSR dinámico
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Esta página obtiene el identificador del evento desde
            la URL, consulta la información en el servidor y genera
            el contenido correspondiente antes de enviarlo al navegador.
          </p>

        </div>

      </div>

    </main>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

      <span className="text-2xl">
        {icon}
      </span>

      <p className="mt-4 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-medium text-slate-200">
        {value}
      </p>

    </div>
  );
}