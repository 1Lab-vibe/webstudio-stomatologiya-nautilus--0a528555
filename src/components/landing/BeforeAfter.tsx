import beforeImg from "@/assets/smile-before.jpg";
import afterImg from "@/assets/smile-after.jpg";
import { useState } from "react";

export const BeforeAfter = () => {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-sm text-primary font-medium mb-3">Результаты пациентов</div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-5 text-balance">До и&nbsp;после профессиональной чистки</h2>
            <p className="text-muted-foreground mb-6">
              Гигиеническая чистка раз в 6 месяцев — простой способ сохранить зубы здоровыми и не доводить до лечения. Покажем результат сразу после процедуры.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3"><span className="text-primary">·</span> Удаление налёта и зубного камня</div>
              <div className="flex gap-3"><span className="text-primary">·</span> Полировка и фторирование эмали</div>
              <div className="flex gap-3"><span className="text-primary">·</span> Рекомендации по уходу дома</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] select-none">
              <img src={afterImg} alt="После лечения" loading="lazy" width={1000} height={1000} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <img src={beforeImg} alt="До лечения" loading="lazy" width={1000} height={1000} className="absolute inset-0 h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">До</div>
              </div>
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">После</div>
              <div className="absolute top-0 bottom-0 w-0.5 bg-background pointer-events-none" style={{ left: `${pos}%` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M6 5L3 8l3 3M10 5l3 3-3 3" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label="Сравнение до и после"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>
            <div className="text-xs text-muted-foreground text-center mt-3">Перетащите ползунок, чтобы сравнить</div>
          </div>
        </div>
      </div>
    </section>
  );
};
