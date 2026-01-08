import { LucideIcon } from 'lucide-react';
import Card from '@/components/ui/Card';

const features = [
  {
    icon: 'Pencil',
    title: 'Nộp bài dễ dàng',
    description: 'Nộp bài viết và nhận phản hồi từ các chuyên gia chỉ với một vài cú nhấp chuột.',
  },
  {
    icon: 'Star',
    title: 'Chấm điểm nhanh chóng',
    description: 'Nhận điểm số viết luận và các gợi ý cải thiện chi tiết.',
  },
  {
    icon: 'BookOpen',
    title: 'Học từ phản hồi',
    description: 'Phân tích phản hồi để nâng cao chất lượng bài viết cho kỳ thi và thực tế.',
  },
];

const Features = () => {
  return (
    <section className="grid gap-8 md:grid-cols-3 p-10">
      {features.map(({ icon, title, description }) => (
        <Card key={title} className="text-center">
          <LucideIcon name={icon} size={40} className="mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-foreground/70">{description}</p>
        </Card>
      ))}
    </section>
  );
};

export default Features;
