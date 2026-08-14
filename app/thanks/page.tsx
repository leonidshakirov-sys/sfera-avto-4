import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/siteData";
import { CtaButton } from "@/components/CtaButton";

export default function ThanksPage() {
  return (
    <>
      <Header />
      <main className="wrap py-24">
        <p className="eyebrow">Заявка принята</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold">Спасибо! Свяжемся с вами для уточнения условий.</h1>
        <p className="mt-4 text-muted">
          Если нужно быстрее, позвоните{" "}
          <a className="text-amber" href={`tel:${siteData.phone.tel}`}>
            {siteData.phone.tel}
          </a>
          .
        </p>
        <CtaButton href="/" className="mt-8">
          На главную
        </CtaButton>
      </main>
      <Footer />
    </>
  );
}
