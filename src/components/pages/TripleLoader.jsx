export default function TripleLoader() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="flex gap-4">
        
        <span className="w-6 h-6 rounded-full border-[5px] border-green-400
                         animate-pulse scale-100" />

        <span className="w-6 h-6 rounded-full border-[5px] border-green-400
                         animate-pulse [animation-delay:300ms]" />

        <span className="w-6 h-6 rounded-full border-[5px] border-green-400
                         animate-pulse [animation-delay:600ms]" />

      </div>
    </div>
  );
}
