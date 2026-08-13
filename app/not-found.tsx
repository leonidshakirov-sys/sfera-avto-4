import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap py-24">
      <h1 className="text-4xl font-semibold">Страница не найдена</h1>
      <p className="mt-4 text-muted">Вернитесь на главную и оставьте заявку на аренду площадки.</p>
      <Link href="/" className="btn btn-primary mt-8">
        На главную
      </Link>
    </main>
  );
}
