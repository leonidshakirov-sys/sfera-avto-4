import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/siteData";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="wrap max-w-3xl py-16">
        <h1 className="text-4xl font-semibold">Политика конфиденциальности</h1>
        <p className="mt-6 text-muted">
          Документ описывает, как {siteData.name} обрабатывает данные, которые вы оставляете через форму заявки или по телефону.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Какие данные собираем</h2>
        <p className="mt-3 text-muted">Имя, номер телефона, тип транспорта, количество единиц и комментарий к заявке.</p>
        <h2 className="mt-10 text-2xl font-semibold">Цели</h2>
        <p className="mt-3 text-muted">Обратный звонок, расчёт аренды и согласование просмотра площадки.</p>
        <h2 className="mt-10 text-2xl font-semibold">Ваши права</h2>
        <p className="mt-3 text-muted">
          Уточнить или удалить данные можно по телефону{" "}
          <a className="text-amber" href={`tel:${siteData.phone.tel}`}>
            {siteData.phone.display}
          </a>
          .
        </p>
        <p className="mt-10">
          <a className="text-amber" href="/">
            На главную
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
