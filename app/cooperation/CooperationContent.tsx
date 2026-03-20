'use client';

export default function CooperationContent() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 md:py-16 pb-24 md:pb-32">
      <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-10">
        Сотрудничество с брендами
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="font-semibold">
          Я открыта к сотрудничеству с брендами, отелями и туристическими проектами.
        </p>

        <p>
          Если ваша компания работает в сфере, связанной или смежной со сферой путешествий, лайфстайла или гостеприимства, и вам интересно совместное сотрудничество - буду рада обсудить возможные форматы.
        </p>

        <div>
          <p className="font-semibold mb-3">Форматы партнёрства:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-1">
            <li>совместные путешествия и проекты</li>
            <li>нативные интеграции в социальных сетях</li>
            <li>сотрудничество с отелями и курортами</li>
            <li>партнёрские проекты с туристическими брендами</li>
            <li>участие брендов в групповых турах</li>
          </ul>
        </div>

        <p className="font-medium italic text-ocean-deep">
          Я рассматриваю только те проекты и бренды, которые действительно могут быть интересны моей аудитории. И которые я лично считаю достойными рекомендации.
        </p>

        <div className="pt-4">
          <a
            href="mailto:info@ostwesttravel.de?subject=Предложение о сотрудничестве"
            className="inline-block bg-gradient-to-br from-gold to-gold-light text-ocean-deep font-semibold text-base px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
          >
            Отправить предложение о сотрудничестве
          </a>
        </div>
      </div>
    </div>
  );
}
