import { useState } from "react";
import treatmentImg from "@/assets/treatment-room.jpg";

const prices = [
  ["Консультация и осмотр", "1 500 ₽"],
  ["Прицельный снимок", "500 ₽"],
  ["Лечение кариеса", "от 4 500 ₽"],
  ["Профессиональная гигиена", "от 6 000 ₽"],
  ["Удаление зуба", "от 3 500 ₽"],
  ["Имплантация (Straumann)", "от 38 000 ₽"],
  ["Виниры (керамика)", "от 32 000 ₽"],
  ["Отбеливание ZOOM", "от 25 000 ₽"],
];

export const Request = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="prices" className="bg-secondary/40 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="text-sm text-primary font-medium mb-3">Цены и запись</div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-balance">Прозрачные цены — смету<br/>озвучиваем до&nbsp;начала лечения</h2>

            <div className="rounded-2xl bg-card border border-border overflow-hidden mb-6">
              {prices.map(([t, p], i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 ${i !== prices.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="text-sm">{t}</span>
                  <span className="text-sm font-medium text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <img src={treatmentImg} alt="Кабинет приёма" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </div>
          </div>

          <div id="request" className="lg:col-span-6">
            <div className="bg-card rounded-2xl p-7 lg:p-10 border border-border shadow-[var(--shadow-card)] sticky top-6">
              <h3 className="font-serif text-3xl mb-2">Записаться на приём</h3>
              <p className="text-sm text-muted-foreground mb-7">Перезвоним в течение 15 минут в рабочее время и подберём удобное окно.</p>

              {sent ? (
                <div className="rounded-xl bg-primary-soft border border-primary/20 p-6 text-center">
                  <div className="font-serif text-2xl text-primary mb-2">Заявка отправлена</div>
                  <p className="text-sm text-muted-foreground">Свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm mb-1.5">Имя</label>
                    <input required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="Как к вам обращаться" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5">Телефон</label>
                    <input required type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5">Что беспокоит (необязательно)</label>
                    <textarea rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" placeholder="Например, болит зуб справа сверху" />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-4 font-medium hover:bg-primary/90 transition shadow-[var(--shadow-soft)]">
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
