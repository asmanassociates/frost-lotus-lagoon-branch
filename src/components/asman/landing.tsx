import { FormEvent, useState } from "react";
import { LogoMark } from "@/components/asman/logo";

const PHONE = "+77472225859";
const PHONE_DISPLAY = "+7 747 222 58 59";
const EMAIL = "contact@asmanassociates.com";

const constraints = [
  ["Активных мандатов", "≤ 3"],
  ["Отраслевой фокус", "Premium B2B / B2C"],
  ["Публичный портфель", "Отсутствует"],
  ["Модель входа", "По приглашению"],
  ["Предоплата со стороны принципала", "0"],
];

const ops = [
  {
    label: "Zero Management Fee",
    desc: "Абонентская плата, оплата за настройку, почасовая тарификация — отсутствуют как класс. Доход формируется исключительно на стороне результата.",
  },
  {
    label: "Revenue Share",
    desc: "Вознаграждение рассчитывается от чистой прибыли по сделкам, привлечённым структурой. Пропорция раздела — в диапазоне 30/70–50/50, фиксируется на этапе due diligence ниши и не пересматривается в одностороннем порядке.",
  },
  {
    label: "AI Lead Filtration",
    desc: "Проприетарная инфраструктура на базе GPT / Claude API обрабатывает входящий трафик в WhatsApp и Telegram, верифицирует бюджет и намерение до контакта с closing-контуром. Порядка 90% нецелевого шума отсекается автоматически, без участия человека.",
  },
  {
    label: "Sales Execution",
    desc: "Закрытие сделок ведётся напрямую. Делегирование колл-центрам, младшим менеджерам или сторонним подрядчикам не предусмотрено.",
  },
];

const stats = [
  ["$2,000–$10,000", "Целевой чек по сделке"],
  ["$1,000–$5,000", "Операционная маржа на транзакцию"],
  ["~90%", "Отсечение нецелевого трафика"],
];

const layers = [
  {
    n: "01",
    title: "Трафик",
    body: "Снайперские кампании на узкую платёжеспособную аудиторию. Не массовый охват — точечный вход в премиум-сегмент.",
  },
  {
    n: "02",
    title: "ИИ-квалификация",
    body: "Кастомный агент ведёт диалог в WhatsApp и Telegram как топ-менеджер: выявляет боль, проверяет бюджет и намерение. Человеку передаются только горячие.",
  },
  {
    n: "03",
    title: "Закрытие",
    body: "Прямой звонок или переписка по квалифицированному отчёту. High-ticket сделки закрываются лично, без колл-центра.",
  },
  {
    n: "04",
    title: "Учёт",
    body: "Жёсткий контур затрат, чистой прибыли и доли принципала. Прозрачность по привлечённым сделкам, без абонентской дымки.",
  },
];

const fields = [
  { name: "niche", label: "Ниша / продукт", placeholder: "Например: private wealth management" },
  { name: "ticket", label: "Средний чек за сделку", placeholder: "в $" },
  { name: "revenue", label: "Оборот за последние 3 месяца", placeholder: "в $" },
  { name: "margin", label: "Валовая маржинальность", placeholder: "в %" },
  { name: "contact", label: "Контакт для связи", placeholder: "Telegram / email" },
] as const;

type FormState = Record<(typeof fields)[number]["name"], string>;

const empty: FormState = {
  niche: "",
  ticket: "",
  revenue: "",
  margin: "",
  contact: "",
};

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-line pb-5">
      <span className="font-serif text-sm text-ink-faint tabular-nums">{num}</span>
      <h2 className="font-serif text-section font-normal">{title}</h2>
    </div>
  );
}

export function AsmanLanding() {
  const [form, setForm] = useState<FormState>(empty);
  const [sentHint, setSentHint] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Ниша: ${form.niche || "—"}`,
      `Средний чек: ${form.ticket || "—"}`,
      `Оборот за 3 мес: ${form.revenue || "—"}`,
      `Маржинальность: ${form.margin || "—"}`,
      `Контакт: ${form.contact || "—"}`,
    ].join("\r\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Verification Request")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSentHint(true);
  }

  return (
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-bg text-ink">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 75% 8%, rgb(92 122 153 / 0.09), transparent 60%), radial-gradient(ellipse 700px 400px at 15% 92%, rgb(92 122 153 / 0.05), transparent 60%)",
        }}
      />

      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg/85 px-6 py-5 backdrop-blur-sm md:px-14">
        <a href="#top" className="text-ink no-underline">
          <LogoMark size="header" />
        </a>
        <nav className="flex flex-wrap justify-end gap-x-8 gap-y-2">
          <a className="border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink" href="#who">
            Structure
          </a>
          <a className="border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink" href="#logic">
            Logic
          </a>
          <a className="border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink" href="#engine">
            Engine
          </a>
          <a className="border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink" href="#verify">
            Verification
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl">
        <section className="px-6 py-28 md:px-14 md:py-36">
          <div className="mb-16 flex justify-center md:justify-start">
            <LogoMark size="hero" />
          </div>
          <h1 className="mb-7 max-w-3xl font-serif text-display font-normal leading-tight tracking-tight">
            Дистрибуция — это инфраструктура, а не услуга.
          </h1>
          <p className="mb-10 max-w-md text-lead leading-relaxed text-ink-dim">
            Закрытая операционная структура, управляющая продажами ограниченного числа принципалов. Вход — по приглашению или после верификации.
          </p>
          <a
            href="#verify"
            className="inline-block border border-line-strong px-7 py-3.5 text-sm text-ink transition-colors hover:border-accent hover:bg-accent/10"
          >
            Пройти верификацию
          </a>
        </section>

        <section id="who" className="px-6 py-24 md:px-14">
          <SectionHead num="01" title="Who We Are" />
          <div className="grid gap-9 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <p className="mb-5 text-body leading-loose text-ink-dim">
                Структура действует на стыке трёх ролей: скаута, отбирающего продукт до того, как о нём узнает рынок; продюсера, выстраивающего процесс превращения интереса в оплаченную сделку; и инвестора — не капитала, но навыка и инфраструктуры дистрибуции, вносимых в проект без предоплаты со стороны принципала.
              </p>
              <p className="mb-5 text-body leading-loose text-ink-dim">
                Продукт или услуга принципала должны быть уже сформированы и подтверждены рынком.{" "}
                <strong className="font-medium text-ink">Единственный дефицит, который структура закрывает — отсутствие системной дистрибуции.</strong>{" "}
                Маркетинговая доработка продукта, обучение персонала и операционный консалтинг — вне периметра работы.
              </p>
              <p className="text-body leading-loose text-ink-dim">
                Количество одновременных мандатов ограничено физически, а не маркетингово.
              </p>
            </div>
            <div className="border-l border-line-strong pl-7">
              {constraints.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line py-3.5 text-sm first:pt-0">
                  <span className="text-ink-dim">{k}</span>
                  <span className="shrink-0 tabular-nums text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offer" className="px-6 py-24 md:px-14">
          <SectionHead num="02" title="The Offer" />
          <blockquote className="max-w-3xl border-l border-line-strong pl-7 font-serif text-lg leading-relaxed text-ink md:text-xl">
            Нам не нужны ваши деньги за настройку рекламы. Мы не берём фиксу. Мы за свой счёт выстраиваем ИИ-систему лидогенерации и сами закрываем премиальных клиентов. От вас — безупречное выполнение обязательств. Чистую прибыль от приведённых нами клиентов делим 50/50 или 30/70 — в зависимости от ниши.
          </blockquote>
          <p className="mt-8 max-w-2xl text-body leading-loose text-ink-dim">
            Для принципала это нулевой финансовый риск и автономный движок продаж. Мы не агентство: нет штата, нет массового набора клиентов, нет офисного шума. Максимум два–три мандата одновременно.
          </p>
        </section>

        <section id="logic" className="px-6 py-24 md:px-14">
          <SectionHead num="03" title="Operational Logic & Revenue Model" />
          <div>
            {ops.map((item) => (
              <div key={item.label} className="grid gap-2.5 border-b border-line py-7 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="font-serif text-base text-ink">{item.label}</div>
                <p className="max-w-xl text-body leading-loose text-ink-dim">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-panel px-7 py-8">
                <div className="mb-2 font-serif text-2xl tabular-nums">{value}</div>
                <div className="text-caption tracking-wide text-ink-dim">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="engine" className="px-6 py-24 md:px-14">
          <SectionHead num="04" title="Engine" />
          <p className="mb-12 max-w-xl text-body leading-loose text-ink-dim">
            Внутри — конвейер из четырёх слоёв. Люди закрывают сделки. Алгоритмы отсекают шум.
          </p>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {layers.map((layer) => (
              <article key={layer.n} className="bg-panel px-7 py-8">
                <div className="mb-4 font-serif text-caption text-ink-faint tabular-nums">{layer.n}</div>
                <h3 className="mb-3 font-serif text-lg font-normal">{layer.title}</h3>
                <p className="text-sm leading-relaxed text-ink-dim">{layer.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="verify" className="px-6 py-24 md:px-14">
          <SectionHead num="05" title="Verification" />
          <p className="mb-12 max-w-xl text-body leading-loose text-ink-dim">
            Структура не работает с массовым рынком. Рассмотрение кандидата начинается только после заполнения формы ниже.{" "}
            <strong className="font-medium text-ink">Отсутствие ответа в течение 5 рабочих дней равнозначно отказу.</strong>
          </p>

          <form onSubmit={submit} className="max-w-3xl">
            {fields.map((field) => (
              <div key={field.name} className="grid items-end gap-2 border-b border-line py-5 md:grid-cols-[260px_1fr] md:gap-6">
                <label htmlFor={field.name} className="text-sm text-ink-dim">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={form[field.name]}
                  onChange={(e) => setForm((s) => ({ ...s, [field.name]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full border-0 border-b border-line-strong bg-transparent py-1.5 font-sans text-body text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                />
              </div>
            ))}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
              <button
                type="submit"
                className="inline-block border border-line-strong px-7 py-3.5 text-sm text-ink transition-colors hover:border-accent hover:bg-accent/10"
              >
                Отправить на рассмотрение
              </button>
              <div className="text-sm text-ink-dim">
                <a className="hover:text-ink" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <span className="mx-2 text-ink-faint">·</span>
                <a className="hover:text-ink" href={`tel:${PHONE}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            {sentHint ? (
              <p className="mt-6 text-caption text-ink-dim">Откроется почтовый клиент. Если этого не произошло — напишите напрямую на {EMAIL}.</p>
            ) : null}
          </form>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line px-6 py-10 md:px-14">
        <p className="mb-7 max-w-2xl text-caption leading-relaxed text-ink-faint">
          Материалы на странице не являются публичной офертой. Партнёрство не осуществляет набор клиентов на массовой основе и не рассматривает заявки вне формы верификации. Решение о взаимодействии принимается в одностороннем порядке по итогам due diligence и может быть отклонено без объяснения причин.
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6 text-micro text-ink-faint">
          <LogoMark size="header" />
          <span>
            {PHONE_DISPLAY} · Алматы
          </span>
        </div>
      </footer>
    </div>
  );
}
