import { clsx } from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx('bg-secondary/10 p-6 rounded-xl', className)}>
      {children}
    </div>
  );
};

export default Card;
