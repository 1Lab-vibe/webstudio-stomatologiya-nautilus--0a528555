import { Phone, MapPin, Clock } from "lucide-react";

export const Contacts = () => {
  return (
    <section id="contacts" className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-sm text-primary font-medium mb-3">Контакты</div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-10 text-balance">Ждём вас<br/>в&nbsp;Хамовниках</h2>

            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Адрес</div>
                  <div className="font-medium">Москва, 119034<br/>пер д, 3</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Телефон</div>
                  <a href="tel:+74993476595" className="font-medium hover:text-primary transition">8 (499) 347-65-95</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Часы работы</div>
                  <div className="font-medium">Пн – Сб · 09:00 – 21:00</div>
                  <div className="text-sm text-muted-foreground">Воскресенье — по записи</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-border h-[420px] lg:h-full min-h-[420px]">
              <iframe
                title="Стоматология Наутилус на карте"
                src="https://yandex.ru/map-widget/v1/?ll=37.585%2C55.736&mode=search&text=%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D0%9D%D0%B0%D1%83%D1%82%D0%B8%D0%BB%D1%83%D1%81%20119034%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=16"
                width="100%"
                height="100%"
                frameBorder={0}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="container-px mx-auto max-w-7xl mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© Стоматология «Наутилус», {new Date().getFullYear()}</div>
        <div>Лицензия на медицинскую деятельность</div>
      </footer>
    </section>
  );
};
