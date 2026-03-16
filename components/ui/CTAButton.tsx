'use client';

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
      ? 'px-5 py-3 text-sm'
      : size === 'lg'
        ? 'px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-xl'
        : 'px-7 py-3.5 text-base';

  const variantClasses =
    variant === 'dark'
      ? 'bg-ocean-deep hover:bg-ocean-medium text-white'
      : 'bg-gradient-to-r from-gold to-gold-light text-ocean-deep hover:shadow-gold/30';

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith('#') && href.includes('?')) {
      e.preventDefault();
      const id = href.slice(1).split('?')[0];
      const el = document.getElementById(id);
      if (el) {
        window.history.replaceState(null, '', href);
        el.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-center font-semibold rounded-full transition-all shadow-lg hover:shadow-xl gold-glow ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}
