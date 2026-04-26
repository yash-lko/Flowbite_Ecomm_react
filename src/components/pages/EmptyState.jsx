import { MdSearchOff } from "react-icons/md";

export default function EmptyState({
  title = "No Products Found",
  subtitle = "Try changing filters or search keywords",
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
        <MdSearchOff size={40} />
      </div>

      <h2 className="mt-6 text-xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-sm text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}
