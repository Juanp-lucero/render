import { getEventById } from "../../lib/events";

export default async function SSRPage() {
  const event = await getEventById(1);

  if (!event) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold">
            Evento no encontrado
          </h1>

          <p className="mt-3 text-slate-400">
            El evento que estás buscando no existe.
          </p>
        </div>
      </main>
    );
  }

  const availableSeats = event.capacity - event.registered;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">

        {/* ENCABEZADO */}

        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-purple-400">
            UNIEVENTS
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Detalle del evento
          </h1>

          <p className="mt-3 text-slate-400">
            Información del evento universitario obtenida desde
            el servidor.
          </p>
        </div>

        {/* EVENTO */}

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          {/* PORTADA */}

          <div className="flex h-72 items-center justify-center bg-slate-900 text-9xl">
            {event.emoji}
          </div>

          <div className="p-8 md:p-10">

            {/* CATEGORÍA */}

            <span className="rounded-full bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-300">
              {event.category}
            </span>

            {/* TÍTULO */}

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {event.title}
            </h2>

            {/* DESCRIPCIÓN */}

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
              {event.description}
            </p>

            {/* INFORMACIÓN */}

            <div className="mt-10 grid gap-4 md:grid-cols-3">

              <InfoCard
                icon="📅"
                title="Fecha"
                value={event.date}
              />

              <InfoCard
                icon="🕐"
                title="Hora"
                value={event.time}
              />

              <InfoCard
                icon="📍"
                title="Ubicación"
                value={event.location}
              />

            </div>

            {/* CAPACIDAD */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">

              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">

                <div>
                  <p className="text-sm text-slate-500">
                    Capacidad del evento
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {event.registered} / {event.capacity}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-sm text-slate-500">
                    Cupos disponibles
                  </p>

                  <p className="mt-1 text-xl font-bold text-emerald-400">
                    {availableSeats}
                  </p>
                </div>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-purple-400"
                  style={{
                    width: `${
                      (event.registered / event.capacity) * 100
                    }%`,
                  }}
                />

              </div>

            </div>

            {/* ACCIONES */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button className="rounded-xl bg-purple-500 px-7 py-3 font-semibold text-white transition hover:bg-purple-400">
                Inscribirme al evento
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-slate-300 transition hover:bg-white/10">
                Compartir evento
              </button>

            </div>

          </div>

        </article>

        {/* EXPLICACIÓN */}

        <section className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-6">

          <p className="font-semibold text-purple-300">
            Renderizado SSR
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Esta página obtiene la información del evento en el
            servidor antes de generar la respuesta HTML. El navegador
            recibe inicialmente el contenido ya generado, permitiendo
            mostrar la información del evento sin depender de una
            solicitud inicial desde JavaScript del cliente.
          </p>

        </section>

      </div>
    </main>
  );
}

function InfoCard({
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

      <div className="text-2xl">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-medium text-slate-200">
        {value}
      </p>

    </div>
  );
}