import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CTAButton from '@/components/ui/CTAButton';
import { Lang } from '@/lib/i18n';

const t = {
  de: {
    label: 'Exklusives Format',
    title: 'Begleitete Gruppenkreuzfahrten',
    subtitle: 'Reisen Sie in Gesellschaft Gleichgesinnter – mit meiner persönlichen Begleitung an Bord',
    heading: 'Ein Format, in das man sich verliebt',
    description: '20 bis 50 Personen, 2–3 Kreuzfahrten pro Jahr. Ich begleite die Gruppe persönlich von der Einschiffung bis zum letzten Abendessen.',
    features: [
      { title: 'Ausflüge mit deutschsprachigen Guides', desc: 'Nicht nur Ausflüge, sondern verständlich, organisiert, stressfrei' },
      { title: 'Transfers und Logistik – alles organisiert', desc: 'Sie denken nicht über Umstiege und Fahrpläne nach' },
      { title: 'Hilfe vor Ort in jeder Situation', desc: 'Wenn etwas passiert – ich bin da' },
      { title: 'Kabinenauswahl nach Schiff, Deck und Budget', desc: 'Nicht „irgendeine Kabine", sondern die richtige Kabine' },
    ],
    fleetTitle: 'Ich kenne die Flotte von innen:',
    fleetDesc: 'Ich verstehe die Unterschiede zwischen Schiffen, Klassen und Service',
    whatsapp: 'Programm der nächsten Kreuzfahrt anfordern',
    cta: 'Platz in der Gruppe buchen',
    imageAlt: 'Begleitete Gruppenkreuzfahrt - OST-West Travel',
  },
  ru: {
    label: 'Авторский формат',
    title: 'Групповые круизы с сопровождением',
    subtitle: 'Путешествуйте в компании единомышленников - с моим личным сопровождением на борту',
    heading: 'Формат, в который влюбляются',
    description: 'От 20 до 50 человек, 2–3 круиза в год. Я лично сопровождаю группу от посадки до финального ужина.',
    features: [
      { title: 'Экскурсии с русскоязычными гидами', desc: 'Не просто экскурсии, а понятные, организованные, без стресса' },
      { title: 'Трансферы и логистика - всё организовано', desc: 'Вы не думаете о пересадках и расписаниях' },
      { title: 'Помощь на месте в любой ситуации', desc: 'Если что-то происходит - я рядом' },
      { title: 'Подбор каюты с учётом лайнера, палубы и бюджета', desc: 'Не «просто каюта», а правильная каюта' },
    ],
    fleetTitle: 'Знаю флот изнутри:',
    fleetDesc: 'Понимаю различия между лайнерами, классами и сервисом',
    whatsapp: 'Получить программу ближайшего круиза',
    cta: 'Забронировать место в группе',
    imageAlt: 'Групповой круиз с сопровождением - OST-West Travel',
  },
};

export default function Cruises({ lang = 'de' }: { lang?: Lang }) {
  const text = t[lang];

  return (
    <section id="cruises" className="py-20 md:py-24 bg-white" aria-labelledby="cruises-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={text.label}
          title={text.title}
          subtitle={text.subtitle}
          headingId="cruises-heading"
        />

        <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/cruise-flagman.webp"
                alt={text.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h3 className="text-2xl font-serif text-ocean-deep mb-4">
              {text.heading}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {text.description}
            </p>

            <div className="space-y-4 mb-8">
              {text.features.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="text-gray-700 font-medium">{item.title}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet expertise */}
            <div className="bg-ocean-deep/5 rounded-xl p-5">
              <p className="text-sm font-medium text-ocean-deep mb-3">{text.fleetTitle}</p>
              <div className="flex flex-wrap gap-2">
                {['AIDA', 'MSC', 'Costa', 'Mein Schiff'].map((line) => (
                  <span key={line} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-ocean-deep shadow-sm">
                    {line}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {text.fleetDesc}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:ml-[calc(50%+1.25rem)] mb-12">
          <WhatsAppButton size="sm" className="w-full sm:w-auto justify-center">{text.whatsapp}</WhatsAppButton>
          <CTAButton size="sm" href="#contact?direction=cruises" className="w-full sm:w-auto justify-center">
            {text.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
