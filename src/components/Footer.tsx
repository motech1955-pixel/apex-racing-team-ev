
export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto relative z-10 text-center">
      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-racing-red rounded-full"></div>
        <div className="w-2 h-2 bg-racing-red rounded-full rotate-45"></div>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-racing-red rounded-full"></div>
      </div>
      <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
        Built To Drive The Future
      </p>
    </footer>
  );
};
