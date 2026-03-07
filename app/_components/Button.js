function Button({ children, className = " " }) {
  return (
    <button
      suppressHydrationWarning={true}
      className={`hover:bg-primary/85 flex w-fit hover:text-white cursor-pointer items-center gap-1 rounded-full border p-4 text-sm font-semibold transition-all duration-300 md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
