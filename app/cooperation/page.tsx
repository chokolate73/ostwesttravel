import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Сотрудничество - OST-West Travel',
  description: 'Сотрудничество с брендами, отелями и туристическими проектами.',
};

export default function CooperationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <div className="bg-ocean-deep text-white">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif hover:text-gold transition-colors">
            OST-West <span className="text-gold">Travel</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            На главную
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-10">
          Сотрудничество с&nbsp;брендами или партнёрство
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="font-bold text-lg">
            Я открыта к&nbsp;сотрудничеству с&nbsp;брендами, отелями и&nbsp;туристическими проектами.
          </p>

          <p>
            Если ваша компания работает в&nbsp;сфере, связанной или смежной со&nbsp;сферой путешествий,
            лайфстайла или гостеприимства, и&nbsp;вам интересно совместное сотрудничество&nbsp;&mdash;
            буду рада обсудить возможные форматы.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-ocean-deep mb-4">Форматы партнёрства:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>совместные путешествия и&nbsp;проекты</li>
              <li>нативные интеграции в&nbsp;социальных сетях</li>
              <li>сотрудничество с&nbsp;отелями и&nbsp;курортами</li>
              <li>партнёрские проекты с&nbsp;туристическими брендами</li>
              <li>участие брендов в&nbsp;групповых турах</li>
            </ul>
          </section>

          <p>
            Я рассматриваю только те проекты и&nbsp;бренды, которые действительно могут быть интересны
            моей аудитории. И&nbsp;которые я&nbsp;лично считаю достойными рекомендации.
          </p>

          <div className="pt-4">
            <a
              href="mailto:info@ostwesttravel.de?subject=Предложение о сотрудничестве"
              className="inline-flex items-center gap-2 text-center font-semibold rounded-full transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-gold to-gold-light text-ocean-deep hover:shadow-gold/30 px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-xl"
            >
              Отправить предложение о&nbsp;сотрудничестве
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
