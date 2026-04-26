export default function TripleLoader() {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-slate-50">
      <div className="flex gap-4">
        <span className="h-6 w-6 scale-100 animate-pulse rounded-full border-[5px] border-blue-500" />
        <span className="h-6 w-6 animate-pulse rounded-full border-[5px] border-cyan-400 [animation-delay:300ms]" />
        <span className="h-6 w-6 animate-pulse rounded-full border-[5px] border-indigo-500 [animation-delay:600ms]" />

      </div>
    </div>
  );
}
