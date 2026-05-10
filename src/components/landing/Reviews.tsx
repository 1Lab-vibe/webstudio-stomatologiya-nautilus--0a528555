import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    text: "Очень внимательное отношение. Доктор подробно объяснила план лечения, посчитала смету заранее — никаких сюрпризов. Лечила два зуба, всё аккуратно.",
    date: "март 2025",
  },
  {
    name: "Дмитрий П.",
    text: "Привёл ребёнка — впервые без слёз. Спокойная атмосфера, врач разговаривала с ним как со взрослым. Записались на гигиену всей семьёй.",
    date: "февраль 2025",
  },
  {
    name: "Марина С.",
    text: "Делала имплантацию. Подкупила честность — сразу сказали про сроки и риски. Прошло полгода, всё отлично. Рекомендую.",
    date: "январь 2025",
  },
];

export const Reviews = () => {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-sm text-primary font-medium mb-3">Что говорят пациенты</div>
            <h2 className="font-serif text-4xl lg:text-5xl">Рейтинг 5,0 на&nbsp;Яндекс.Картах</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-medium">5,0</span>
              <span className="text-muted-foreground"> · 14 отзывов</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="bg-card rounded-2xl p-7 border border-border flex flex-col">
              <Quote className="h-6 w-6 text-primary mb-4 opacity-60" />
              <p className="text-foreground/90 leading-relaxed mb-6 flex-1">{r.text}</p>
              <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                <span className="font-medium">{r.name}</span>
                <span className="text-muted-foreground">{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
