import Button from '@/components/ui/Button';

const CTA = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-t from-background via-accent to-secondary">
      <h2 className="text-3xl font-bold text-foreground">Sẵn sàng cải thiện kỹ năng viết của bạn?</h2>
      <p className="mt-4 text-foreground/80">Gia nhập hôm nay và nhận những đánh giá chi tiết giúp bạn cải thiện kỹ năng viết.</p>
      <Button variant="secondary" className="mt-8">
        Đăng ký ngay
      </Button>
    </section>
  );
};

export default CTA;
