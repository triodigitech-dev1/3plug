function PlugShell({ title, children }) {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default PlugShell
