import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...rest }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded-lg transition-colors';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-white hover:bg-opacity-90',
  };

  const classes = twMerge(baseStyles, variantStyles[variant], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
