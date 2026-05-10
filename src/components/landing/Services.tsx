import toolsImg from "@/assets/services-tools.jpg";
import diagImg from "@/assets/diagnostics.jpg";

const services = [
  { title: "Терапия и лечение кариеса", desc: "Лечение под микроскопом, эстетические пломбы.", price: "от 4 500 ₽" },
  { title: "Профессиональная гигиена", desc: "Ультразвук, Air Flow, полировка, фторирование.", price: "от 6 000 ₽" },
  { title: "Имплантация", desc: "Системы Straumann, Astra Tech. Гарантия и сопровождение.", price: "от 38 000 ₽" },
  { title: "Эстетика и виниры", desc: "Коррекция формы и цвета зубов, цельнокерамические виниры.", price: "от 32 000 ₽" },
  { title: "Хирургия", desc: "Удаление зубов любой сложности, в том числе восьмёрок.", price: "от 3 500 ₽" },
  { title: "Детская стоматология", desc: "Бережный приём детей с 3 лет в спокойной обстановке.", price: "от 2 000 ₽" },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-sm text-primary font-medium mb-3">Услуги</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-balance">Полный приём в одной клинике — от&nbsp;осмотра до&nbsp;имплантации</h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground self-end">
            Мы не назначаем лишнее. Если зуб можно сохранить — лечим. Сложные случаи обсуждаем командой и предлагаем варианты с разной ценой.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-border p-7 hover:border-primary/40 hover:bg-primary-soft/30 transition-colors">
              <div className="flex items-baseline justify-between mb-3 gap-3">
                <h3 className="font-serif text-2xl">{s.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="text-sm font-medium text-primary">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="rounded-2xl overflow-hidden h-64">
            <img src={toolsImg} alt="Стерильные инструменты на приёме" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img src={diagImg} alt="Диагностика и рентген в клинике" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
