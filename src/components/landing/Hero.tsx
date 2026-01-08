import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-background via-primary to-secondary">
      <motion.h1
        className="text-4xl font-bold text-foreground"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Chấm Chữa Writing Task 2
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-foreground/80"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Nền tảng toàn diện để đánh giá và cải thiện kỹ năng viết luận.
      </motion.p>
      <Button variant="primary" className="mt-8">
        Bắt đầu ngay
      </Button>
    </section>
  );
};

export default Hero;
