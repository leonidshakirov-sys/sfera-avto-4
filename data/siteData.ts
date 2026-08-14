export const siteData = {
  name: "Сфера Авто",
  legalName: "Сфера Авто",
  area: "≈ 2000 м²",
  areaShort: "2000 м²",
  address: {
    line: "32-й км МКАД, владение 15",
    short: "32-й км МКАД, владение 15",
    city: "Москва",
    full: "32-й км МКАД, владение 15",
  },
  geo: { lat: 55.575, lng: 37.5983 },
  phone: {
    display: "+7 (916) 265-92-62",
    tel: "+79162659262",
    wa: "79162659262",
  },
  messengers: {
    whatsapp: "https://wa.me/79162659262",
    telegram: "https://t.me/+79162659262",
    max: "https://max.ru/",
  },
  workingHours: {
    days: "Ежедневно",
    from: "08:00",
    to: "22:00",
    display: "Ежедневно 08:00–22:00",
    long: "Ежедневно с 08:00 до 22:00",
    schema: "Mo-Su 08:00-22:00",
    todayUntil: "Сегодня работаем до 22:00",
  },
  links: {
    maps: "https://yandex.ru/maps/?pt=37.5983,55.575&z=16&l=map",
    route: "https://yandex.ru/maps/?rtext=~55.575,37.5983&rtt=auto",
    mapEmbed:
      "https://yandex.ru/map-widget/v1/?ll=37.5983,55.575&z=16&pt=37.5983,55.575,pm2rdm",
  },
  siteUrl: "https://leonidshakirov-sys.github.io/sfera-avto-4",
  seo: {
    title: "Охраняемая стоянка и площадка на МКАД в аренду | Сфера Авто",
    description:
      "Охраняемая площадка на 32-м км МКАД, владение 15, для автомобилей, коммерческого транспорта, грузовиков и спецтехники. Видеонаблюдение, освещение, удобный въезд. Ежедневно с 08:00 до 22:00.",
  },
  prices: {
    car: { id: "car", title: "Легковой автомобиль", fromRub: 4000 as number | null },
    commercial: { id: "commercial", title: "Коммерческий транспорт", fromRub: 5000 as number | null },
    special: { id: "special", title: "Спецтехника", fromRub: 7000 as number | null },
    truck: { id: "truck", title: "Грузовой транспорт", fromRub: 10000 as number | null },
    fleet: { id: "fleet", title: "Автопарк / часть территории", fromRub: null as number | null, custom: true },
  },
  transportTypes: [
    { value: "car", label: "Легковой автомобиль" },
    { value: "commercial", label: "Коммерческий транспорт" },
    { value: "truck", label: "Грузовой транспорт" },
    { value: "special", label: "Спецтехника" },
    { value: "fleet", label: "Несколько автомобилей / автопарк" },
  ],
  advantages: [
    {
      title: "Первая линия МКАД",
      text: "Удобное расположение и быстрый доступ к основной транспортной магистрали.",
    },
    {
      title: "Охрана и видеонаблюдение",
      text: "Контроль территории в часы работы площадки.",
    },
    {
      title: "Освещённая территория",
      text: "Удобный доступ утром, вечером и в тёмное время суток в рамках режима работы.",
    },
    {
      title: "Шлагбаум и контроль въезда",
      text: "Организованный доступ на территорию.",
    },
    {
      title: "Электричество",
      text: "Возможность использования по согласованию.",
    },
    {
      title: "Сервисная инфраструктура",
      text: "Рядом автомойка, автосервис и другие автомобильные услуги.",
    },
    {
      title: "Аренда части территории",
      text: "Для компаний с несколькими автомобилями или единицами техники.",
    },
    {
      title: "Режим работы",
      text: "",
      hours: true,
    },
  ],
  gallery: [
    { src: "/images/hero.jpg", alt: "Общий вид площадки Сфера Авто у МКАД", caption: "Общий вид площадки" },
    { src: "/images/lot-mkad.jpg", alt: "Площадка Сфера Авто рядом с эстакадой МКАД", caption: "Площадка у МКАД" },
    { src: "/images/access.jpg", alt: "Въезд на территорию Сфера Авто", caption: "Въезд на территорию" },
    { src: "/images/barrier.jpg", alt: "Шлагбаум и пост на въезде", caption: "Шлагбаум и контроль доступа" },
    { src: "/images/commercial.jpg", alt: "Коммерческий транспорт на площадке", caption: "Коммерческий транспорт" },
    { src: "/images/infra.jpg", alt: "Здание и инфраструктура комплекса Сфера Авто", caption: "Инфраструктура «Сфера Авто»" },
    { src: "/images/yard.jpg", alt: "Общий вид территории у здания Сфера Авто", caption: "Общий вид территории" },
  ],
} as const;

export type SiteData = typeof siteData;

export function priceLabel(fromRub: number | null, custom?: boolean) {
  if (custom) return "Индивидуальный расчёт";
  if (fromRub == null) return "по запросу";
  return `от ${fromRub.toLocaleString("ru-RU")} ₽ / месяц`;
}
