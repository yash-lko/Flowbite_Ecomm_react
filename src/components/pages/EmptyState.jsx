import { MdSearchOff } from "react-icons/md";

export default function EmptyState({
  title = "No Products Found",
  subtitle = "Try changing filters or search keywords",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center">

      <div className="w-20 h-20 flex items-center justify-center
                      rounded-full bg-gray-100 text-gray-400">
        <MdSearchOff size={40} />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-500 max-w-sm">
        {subtitle}
      </p>

    </div>
  );
}
