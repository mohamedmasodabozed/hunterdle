function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          React + Tailwind Ready
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Hunterdle</h1>
        <p className="max-w-xl text-base text-slate-300 sm:text-lg">
          A daily hunt-themed word game. Start building gameplay in
          <code className="ml-2 rounded bg-slate-800 px-2 py-1 text-emerald-300">src/App.jsx</code>.
        </p>
      </section>
    </main>
  )
}

export default App
