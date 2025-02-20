


export default function Button({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <button className={`bg-[#102e16] text-[#e9eedf] w-full sm:w-fit h-fit sm:px-5 py-2 sm:py-3 rounded-3xl font-bold font-sans text-nowrap ${className}`}>
      {children}
    </button>
  );
}