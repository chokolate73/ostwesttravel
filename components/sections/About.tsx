import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Warum mir vertraut wird',
    alt: 'Vasilya Nigmatova - Ihre persönliche Reiseexpertin, OST-West Travel',
    facts: [
      { title: 'Erfahrung im Tourismus seit 2007', desc: 'Fast 20 Jahre praktische Erfahrung – von der Auswahl bis zur Begleitung komplexer Routen' },
      { title: 'Professionelle Ausbildung in Deutschland', desc: 'Tourismusausbildung und IHK-Zertifikat' },
      { title: 'Eigenes Reisebüro', desc: 'Offiziell und nach EU-Recht tätig' },
      { title: 'Verträge mit führenden Reiseveranstaltern', desc: 'Zusammenarbeit nur mit geprüften Partnern' },
      { title: 'Persönliche Hotel- und Routenprüfung', desc: 'Nur Angebote, von deren Qualität ich überzeugt bin' },
    ],
    badge1: 'Offiziell\nin Deutschland\nund Europa',
    badge2: 'Geprüfte\nReiseveranstalter',
    badge3: 'Betreuung\nin allen Reisephasen',
  },
  ru: {
    label: 'Почему мне доверяют?',
    alt: 'Василя Нигматова - персональный эксперт по путешествиям, OST-West Travel',
    facts: [
      { title: 'Опыт в туризме с 2007 года', desc: 'Почти 20 лет практической работы - от подбора до сопровождения сложных маршрутов' },
      { title: 'Профессиональное образование в Германии', desc: 'Ausbildung в туризме и сертификат IHK' },
      { title: 'Собственное турбюро', desc: 'Работаю официально и по законам ЕС' },
      { title: 'Контракты с ведущими туроператорами', desc: 'Работаю только через проверенных партнёров' },
      { title: 'Лично проверяю отели и маршруты', desc: 'Предлагаю только варианты, в качестве которых уверена' },
    ],
    badge1: 'Официально\nв Германии\nи по Европе',
    badge2: 'Работаю через\nпроверенных\nтуроператоров',
    badge3: 'Поддержка\nна всех этапах\nпутешествия',
  },
};

export default function About({ lang = 'de' }: { lang?: Lang }) {
  const text = t[lang];

  return (
    <section id="about" className="py-20 md:py-24 bg-white" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photos */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/elena.webp"
                alt={text.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
            {/* TODO: добавить 1-2 мини-фото рабочих кадров */}
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">
                {text.label}
              </span>
            </div>

            <h2 id="about-heading" className="text-3xl md:text-4xl font-serif text-ocean-deep mb-6">
              {lang === 'de' ? 'Vasilya Nigmatova' : 'Василя Нигматова'}
            </h2>

            {/* Short facts */}
            <ul className="space-y-4 text-gray-600 text-base mb-8">
              {text.facts.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="text-gray-700 font-medium">{item.title}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-ocean-deep/5">
                <svg className="w-6 h-6 text-gold mb-1.5 sm:mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-ocean-deep">{text.badge1.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-ocean-deep/5">
                <svg className="w-6 h-6 text-gold mb-1.5 sm:mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="13" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  <path d="M2 12h20" />
                  <path d="M12 12v2" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-ocean-deep">{text.badge2.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-ocean-deep/5">
                <svg className="w-6 h-6 text-gold mb-1.5 sm:mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0113 0" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-ocean-deep whitespace-nowrap">{text.badge3.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
