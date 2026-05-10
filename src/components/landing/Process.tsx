const steps = [
  { n: "01", t: "Запись и звонок", d: "Согласуем удобное время. Подскажем по телефону, что взять с собой." },
  { n: "02", t: "Осмотр и снимок", d: "Доктор проводит осмотр, делаем КТ или прицельный снимок при необходимости." },
  { n: "03", t: "План и смета", d: "Показываем варианты лечения с ценами. Выбираете подходящий — без давления." },
  { n: "04", t: "Лечение", d: "Работаем под анестезией, аккуратно и без спешки. Перерывы по запросу." },
  { n: "05", t: "Контроль", d: "Через 7–14 дней приглашаем на контрольный осмотр — он бесплатный." },
];

export const Process = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <div className="text-sm text-primary font-medium mb-3">Как проходит приём</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-balance">Понятный процесс — от&nbsp;звонка до&nbsp;контрольного осмотра</h2>
        </div>

        {/* Animated SVG path connecting steps */}
        <div className="relative">
          <svg className="hidden lg:block absolute top-8 left-0 w-full h-16 pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden>
            <path
              className="animate-draw"
              d="M 60 30 Q 200 0, 360 30 T 660 30 T 960 30 T 1140 30"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
          </svg>

          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <div className="w-14 h-14 rounded-full bg-primary-soft border border-primary/20 flex items-center justify-center text-primary font-medium mb-5 relative z-10 bg-background">
                  <span className="font-serif text-lg">{s.n}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
