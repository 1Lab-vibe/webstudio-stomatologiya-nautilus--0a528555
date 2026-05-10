import heroImg from "@/assets/hero-clinic.jpg";
import { Phone, MapPin, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-px mx-auto max-w-7xl pt-6 pb-16 lg:pt-10 lg:pb-24">
        {/* Top bar */}
        <nav className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
              <path d="M16 4c-4 0-7 2.5-7 6 0 2 1 3 1 5s-1 3-1 6 1 7 3 7c1.5 0 2-2 4-2s2.5 2 4 2c2 0 3-4 3-7s-1-4-1-6 1-3 1-5c0-3.5-3-6-7-6z" stroke="hsl(var(--primary))" strokeWidth="1.6" fill="hsl(var(--primary-soft))"/>
            </svg>
            <span className="font-serif text-xl tracking-tight">Наутилус</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#doctors" className="hover:text-foreground transition">Врачи</a>
            <a href="#prices" className="hover:text-foreground transition">Цены</a>
            <a href="#contacts" className="hover:text-foreground transition">Контакты</a>
          </div>
          <a href="tel:+74993476595" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span className="hidden sm:inline">8 (499) 347-65-95</span>
          </a>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse-dot" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Сегодня принимаем — есть свободные окна
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance mb-5">
              Семейная стоматология<br/>
              <span className="text-primary italic">в Хамовниках</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 text-balance">
              Лечим аккуратно и без спешки уже 5 лет. Подробная диагностика, понятный план, фиксированная смета — без навязанных услуг.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#request" className="inline-flex justify-center items-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground font-medium hover:bg-primary/90 transition shadow-[var(--shadow-soft)]">
                Записаться на приём
              </a>
              <a href="tel:+74993476595" className="inline-flex justify-center items-center gap-2 rounded-full border border-border px-7 py-4 font-medium hover:bg-secondary transition">
                <Phone className="h-4 w-4" /> Позвонить
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium">5,0</span>
                <span className="text-muted-foreground">· 14 отзывов на Яндекс.Картах</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Хамовники, 5 минут от метро
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Интерьер клиники Наутилус в Хамовниках"
                width={1600}
                height={1100}
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-3 sm:left-6 bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border max-w-[260px]">
              <div className="text-xs text-muted-foreground mb-1">Первичный приём</div>
              <div className="font-serif text-2xl text-foreground">1 500 ₽</div>
              <div className="text-xs text-muted-foreground mt-1">Осмотр, консультация, план лечения</div>
            </div>
            <div className="absolute -top-3 right-3 sm:right-6 bg-card rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] border border-border flex items-center gap-2">
              <svg className="animate-float-tooth" width="28" height="28" viewBox="0 0 32 32" aria-hidden>
                <path d="M16 4c-4 0-7 2.5-7 6 0 2 1 3 1 5s-1 3-1 6 1 7 3 7c1.5 0 2-2 4-2s2.5 2 4 2c2 0 3-4 3-7s-1-4-1-6 1-3 1-5c0-3.5-3-6-7-6z" fill="hsl(var(--primary-soft))" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
              </svg>
              <div className="text-xs">
                <div className="font-medium">5 лет</div>
                <div className="text-muted-foreground">на районе</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
