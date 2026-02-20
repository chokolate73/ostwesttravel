export default function CTAButton({
  children = 'Заказать путешествие',
  href = '#contact',
  className = '',
  size = 'md',
  variant = 'gold',
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'dark';
}) {
  const sizeClasses =
    size === 'sm'
      ? 'px-5 py-2.5 text-sm'
      : size === 'lg'
        ? 'px-7 py-3.5 text-base sm:px-10 sm:py-5 sm:text-xl'
        : 'px-8 py-4 text-lg';

  const variantClasses =
    variant === 'dark'
      ? 'bg-ocean-deep hover:bg-ocean-medium text-white'
      : 'bg-gradient-to-r from-gold to-gold-light text-ocean-deep hover:shadow-gold/30';

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl gold-glow ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}
