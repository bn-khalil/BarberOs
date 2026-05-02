interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, variant = 'primary', onClick, className = "" }: ButtonProps) {
  const baseStyles = "px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-gold text-main hover:bg-opacity-90 border border-gold",
    outline: "bg-transparent text-gold border border-gold/40 hover:border-gold"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}