import Link from "next/link";

const platformInfo = {
  name: "UniEvents",
  university: "Plataforma Universitaria de Eventos",
  description:
    "Sistema web para consultar, descubrir y gestionar eventos académicos, culturales, deportivos y de emprendimiento.",
  location: "Campus Universitario",
};

const features = [
  {
    icon: "🎓",
    title: "Eventos académicos",
    description:
      "Conferencias, talleres y actividades relacionadas con la formación universitaria.",
  },
  {
    icon: "🎭",
    title: "Actividades culturales",
    description:
      "Espacios dedicados al arte, música, danza y expresión cultural.",
  },
  {
    icon: "🏆",
    title: "Eventos deportivos",
    description:
      "Torneos y actividades para promover la participación deportiva.",
  },
  {
    icon: "💡",
    title: "Emprendimiento",
    description:
      "Ferias y espacios para presentar proyectos e ideas desarrolladas por estudiantes.",
  },
];

export const dynamic = "force-static";

export default function SSGPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}

        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            UNIEVENTS
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Información institucional
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Esta sección utiliza Static Site Generation para generar
            contenido que no necesita cambiar constantemente.
          </p>
        </div>

        {/* INFORMACIÓN */}

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                Información estática
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                {platformInfo.name}
              </h2>

              <p className="mt-2 text-lg text-slate-300">
                {platformInfo.university}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                {platformInfo.description}
              </p>

              <p className="mt-5 text-sm text-slate-500">
                📍 {platformInfo.location}
              </p>
            </div>

            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl bg-cyan-400/10 text-6xl">
              🎓
            </div>

          </div>
        </section>

        {/* MISIÓN */}

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Nuestra misión
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Conectar a la comunidad universitaria
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-400">
            UniEvents busca centralizar la información de los eventos
            universitarios para facilitar el acceso de los estudiantes,
            docentes y demás integrantes de la comunidad a actividades
            académicas, culturales, deportivas y de emprendimiento.
          </p>
        </section>

        {/* CARACTERÍSTICAS */}

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Categorías
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Tipos de eventos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30"
              >
                <div className="text-4xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-6 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* EXPLICACIÓN TÉCNICA */}

        <section className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="font-semibold text-cyan-300">
            Renderizado SSG
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Esta página se genera de forma estática durante el proceso
            de construcción de la aplicación. Como su contenido no
            depende de datos que cambien constantemente, puede ser
            almacenada en caché y servida rápidamente a los usuarios.
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/50 p-4">
            <code className="text-sm text-cyan-300">
              export const dynamic = "force-static";
            </code>
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