export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

        <p className="mt-5 text-slate-400">
          Cargando UniEvents...
        </p>
      </div>
    </main>
  );
}