"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  emoji: string;
  capacity: number;
  registered: number;
};

const categories = [
  "Todos",
  "Académico",
  "Cultural",
  "Deportes",
  "Emprendimiento",
];

export default function CSRPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  async function loadEvents() {
    setLoading(true);

    try {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search);
      }

      if (category !== "Todos") {
        params.set("category", category);
      }

      const query = params.toString();

      const response = await fetch(
        query ? `/api/events?${query}` : "/api/events"
      );

      if (!response.ok) {
        throw new Error("Error al obtener los eventos");
      }

      const data = await response.json();

      setEvents(data.events);
    } catch (error) {
      console.error("Error:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }

  // Cargar eventos inicialmente y cuando cambia la categoría
  useEffect(() => {
    loadEvents();
  }, [category]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}

        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            UNIEVENTS
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Explora eventos universitarios
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Encuentra conferencias, talleres, actividades culturales,
            deportivas y proyectos desarrollados dentro de la comunidad
            universitaria.
          </p>
        </div>

        {/* BUSCADOR */}

        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                loadEvents();
              }
            }}
            placeholder="Buscar un evento..."
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            onClick={loadEvents}
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Buscar
          </button>
        </div>

        {/* CATEGORÍAS */}

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === item
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* RESULTADOS */}

        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

            <p className="mt-4 text-slate-400">
              Cargando eventos...
            </p>
          </div>
        ) : events.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-xl font-semibold">
              No encontramos eventos
            </p>

            <p className="mt-2 text-slate-400">
              Intenta cambiar la búsqueda o seleccionar otra categoría.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const percentage = Math.round(
                (event.registered / event.capacity) * 100
              );

              return (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  {/* ICONO */}

                  <div className="flex h-44 items-center justify-center bg-slate-900 text-7xl">
                    {event.emoji}
                  </div>

                  <div className="p-6">
                    {/* CATEGORÍA */}

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {event.category}
                    </span>

                    {/* TÍTULO */}

                    <h2 className="mt-4 text-xl font-bold">
                      {event.title}
                    </h2>

                    {/* DESCRIPCIÓN */}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                      {event.description}
                    </p>

                    {/* INFORMACIÓN */}

                    <div className="mt-5 space-y-2 text-sm text-slate-300">
                      <p>
                        📅 {event.date}
                      </p>

                      <p>
                        🕐 {event.time}
                      </p>

                      <p>
                        📍 {event.location}
                      </p>
                    </div>

                    {/* CUPOS */}

                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-slate-400">
                          Inscritos
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

                    {/* BOTÓN */}

                    <Link
                      href={`/ssr/${event.id}`}
                      className="mt-6 block w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      Ver evento
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* INDICADOR TÉCNICO */}

        <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="font-semibold text-cyan-300">
            Renderizado CSR
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Los eventos se solicitan desde el navegador mediante
            JavaScript y la API de Next.js. La interfaz se actualiza
            dinámicamente según la búsqueda y los filtros seleccionados.
          </p>
        </div>
      </div>
    </main>
  );
}