import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg outline-none';
  const classes = twMerge(baseStyles, className);

  return <input className={clsx('bg-background text-foreground border-primary/50', classes)} {...rest} />;
};

export default Input;
