import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRTrqamf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LogoMark({ size = "header" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: size === "header" ? "logo-mark logo-mark-header" : "logo-mark logo-mark-hero",
		"aria-label": "Asman Associates",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "logo-mark-aa",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "logo-mark-name",
			children: "Asman Associates"
		})]
	});
}
var PHONE = "+77472225859";
var PHONE_DISPLAY = "+7 747 222 58 59";
var EMAIL = "contact@asmanassociates.com";
var constraints = [
	["Активных мандатов", "≤ 3"],
	["Отраслевой фокус", "Premium B2B / B2C"],
	["Публичный портфель", "Отсутствует"],
	["Модель входа", "По приглашению"],
	["Предоплата со стороны принципала", "0"]
];
var ops = [
	{
		label: "Zero Management Fee",
		desc: "Абонентская плата, оплата за настройку, почасовая тарификация — отсутствуют как класс. Доход формируется исключительно на стороне результата."
	},
	{
		label: "Revenue Share",
		desc: "Вознаграждение рассчитывается от чистой прибыли по сделкам, привлечённым структурой. Пропорция раздела — в диапазоне 30/70–50/50, фиксируется на этапе due diligence ниши и не пересматривается в одностороннем порядке."
	},
	{
		label: "AI Lead Filtration",
		desc: "Проприетарная инфраструктура на базе GPT / Claude API обрабатывает входящий трафик в WhatsApp и Telegram, верифицирует бюджет и намерение до контакта с closing-контуром. Порядка 90% нецелевого шума отсекается автоматически, без участия человека."
	},
	{
		label: "Sales Execution",
		desc: "Закрытие сделок ведётся напрямую. Делегирование колл-центрам, младшим менеджерам или сторонним подрядчикам не предусмотрено."
	}
];
var stats = [
	["$2,000–$10,000", "Целевой чек по сделке"],
	["$1,000–$5,000", "Операционная маржа на транзакцию"],
	["~90%", "Отсечение нецелевого трафика"]
];
var layers = [
	{
		n: "01",
		title: "Трафик",
		body: "Снайперские кампании на узкую платёжеспособную аудиторию. Не массовый охват — точечный вход в премиум-сегмент."
	},
	{
		n: "02",
		title: "ИИ-квалификация",
		body: "Кастомный агент ведёт диалог в WhatsApp и Telegram как топ-менеджер: выявляет боль, проверяет бюджет и намерение. Человеку передаются только горячие."
	},
	{
		n: "03",
		title: "Закрытие",
		body: "Прямой звонок или переписка по квалифицированному отчёту. High-ticket сделки закрываются лично, без колл-центра."
	},
	{
		n: "04",
		title: "Учёт",
		body: "Жёсткий контур затрат, чистой прибыли и доли принципала. Прозрачность по привлечённым сделкам, без абонентской дымки."
	}
];
var fields = [
	{
		name: "niche",
		label: "Ниша / продукт",
		placeholder: "Например: private wealth management"
	},
	{
		name: "ticket",
		label: "Средний чек за сделку",
		placeholder: "в $"
	},
	{
		name: "revenue",
		label: "Оборот за последние 3 месяца",
		placeholder: "в $"
	},
	{
		name: "margin",
		label: "Валовая маржинальность",
		placeholder: "в %"
	},
	{
		name: "contact",
		label: "Контакт для связи",
		placeholder: "Telegram / email"
	}
];
var empty = {
	niche: "",
	ticket: "",
	revenue: "",
	margin: "",
	contact: ""
};
function SectionHead({ num, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 flex items-baseline gap-4 border-b border-line pb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-sm text-ink-faint tabular-nums",
			children: num
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-section font-normal",
			children: title
		})]
	});
}
function AsmanLanding() {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [sentHint, setSentHint] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		const body = [
			`Ниша: ${form.niche || "—"}`,
			`Средний чек: ${form.ticket || "—"}`,
			`Оборот за 3 мес: ${form.revenue || "—"}`,
			`Маржинальность: ${form.margin || "—"}`,
			`Контакт: ${form.contact || "—"}`
		].join("\r\n");
		const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Verification Request")}&body=${encodeURIComponent(body)}`;
		window.location.href = href;
		setSentHint(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 z-0",
				"aria-hidden": true,
				style: { background: "radial-gradient(ellipse 900px 500px at 75% 8%, rgb(92 122 153 / 0.09), transparent 60%), radial-gradient(ellipse 700px 400px at 15% 92%, rgb(92 122 153 / 0.05), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg/85 px-6 py-5 backdrop-blur-sm md:px-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "text-ink no-underline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: "header" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-wrap justify-end gap-x-8 gap-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink",
							href: "#who",
							children: "Structure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink",
							href: "#logic",
							children: "Logic"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink",
							href: "#engine",
							children: "Engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "border-b border-transparent text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink",
							href: "#verify",
							children: "Verification"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "px-6 py-28 md:px-14 md:py-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-16 flex justify-center md:justify-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: "hero" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-7 max-w-3xl font-serif text-display font-normal leading-tight tracking-tight",
								children: "Дистрибуция — это инфраструктура, а не услуга."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-10 max-w-md text-lead leading-relaxed text-ink-dim",
								children: "Закрытая операционная структура, управляющая продажами ограниченного числа принципалов. Вход — по приглашению или после верификации."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#verify",
								className: "inline-block border border-line-strong px-7 py-3.5 text-sm text-ink transition-colors hover:border-accent hover:bg-accent/10",
								children: "Пройти верификацию"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "who",
						className: "px-6 py-24 md:px-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							num: "01",
							title: "Who We Are"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-9 md:grid-cols-[1.1fr_0.9fr] md:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-5 text-body leading-loose text-ink-dim",
									children: "Структура действует на стыке трёх ролей: скаута, отбирающего продукт до того, как о нём узнает рынок; продюсера, выстраивающего процесс превращения интереса в оплаченную сделку; и инвестора — не капитала, но навыка и инфраструктуры дистрибуции, вносимых в проект без предоплаты со стороны принципала."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-5 text-body leading-loose text-ink-dim",
									children: [
										"Продукт или услуга принципала должны быть уже сформированы и подтверждены рынком.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-medium text-ink",
											children: "Единственный дефицит, который структура закрывает — отсутствие системной дистрибуции."
										}),
										" ",
										"Маркетинговая доработка продукта, обучение персонала и операционный консалтинг — вне периметра работы."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-body leading-loose text-ink-dim",
									children: "Количество одновременных мандатов ограничено физически, а не маркетингово."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-l border-line-strong pl-7",
								children: constraints.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4 border-b border-line py-3.5 text-sm first:pt-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ink-dim",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 tabular-nums text-ink",
										children: v
									})]
								}, k))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "offer",
						className: "px-6 py-24 md:px-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								num: "02",
								title: "The Offer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "max-w-3xl border-l border-line-strong pl-7 font-serif text-lg leading-relaxed text-ink md:text-xl",
								children: "Нам не нужны ваши деньги за настройку рекламы. Мы не берём фиксу. Мы за свой счёт выстраиваем ИИ-систему лидогенерации и сами закрываем премиальных клиентов. От вас — безупречное выполнение обязательств. Чистую прибыль от приведённых нами клиентов делим 50/50 или 30/70 — в зависимости от ниши."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-2xl text-body leading-loose text-ink-dim",
								children: "Для принципала это нулевой финансовый риск и автономный движок продаж. Мы не агентство: нет штата, нет массового набора клиентов, нет офисного шума. Максимум два–три мандата одновременно."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "logic",
						className: "px-6 py-24 md:px-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								num: "03",
								title: "Operational Logic & Revenue Model"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: ops.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2.5 border-b border-line py-7 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-base text-ink",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-body leading-loose text-ink-dim",
									children: item.desc
								})]
							}, item.label)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3",
								children: stats.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-panel px-7 py-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-2 font-serif text-2xl tabular-nums",
										children: value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-caption tracking-wide text-ink-dim",
										children: label
									})]
								}, label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "engine",
						className: "px-6 py-24 md:px-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								num: "04",
								title: "Engine"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-12 max-w-xl text-body leading-loose text-ink-dim",
								children: "Внутри — конвейер из четырёх слоёв. Люди закрывают сделки. Алгоритмы отсекают шум."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px border border-line bg-line sm:grid-cols-2",
								children: layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "bg-panel px-7 py-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-4 font-serif text-caption text-ink-faint tabular-nums",
											children: layer.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-3 font-serif text-lg font-normal",
											children: layer.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-ink-dim",
											children: layer.body
										})
									]
								}, layer.n))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "verify",
						className: "px-6 py-24 md:px-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								num: "05",
								title: "Verification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-12 max-w-xl text-body leading-loose text-ink-dim",
								children: [
									"Структура не работает с массовым рынком. Рассмотрение кандидата начинается только после заполнения формы ниже.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-medium text-ink",
										children: "Отсутствие ответа в течение 5 рабочих дней равнозначно отказу."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submit,
								className: "max-w-3xl",
								children: [
									fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid items-end gap-2 border-b border-line py-5 md:grid-cols-[260px_1fr] md:gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: field.name,
											className: "text-sm text-ink-dim",
											children: field.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: field.name,
											name: field.name,
											value: form[field.name],
											onChange: (e) => setForm((s) => ({
												...s,
												[field.name]: e.target.value
											})),
											placeholder: field.placeholder,
											className: "w-full border-0 border-b border-line-strong bg-transparent py-1.5 font-sans text-body text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
										})]
									}, field.name)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap items-center justify-between gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "inline-block border border-line-strong px-7 py-3.5 text-sm text-ink transition-colors hover:border-accent hover:bg-accent/10",
											children: "Отправить на рассмотрение"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm text-ink-dim",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "hover:text-ink",
													href: `mailto:${EMAIL}`,
													children: EMAIL
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-2 text-ink-faint",
													children: "·"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "hover:text-ink",
													href: `tel:${PHONE}`,
													children: PHONE_DISPLAY
												})
											]
										})]
									}),
									sentHint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 text-caption text-ink-dim",
										children: [
											"Откроется почтовый клиент. Если этого не произошло — напишите напрямую на ",
											EMAIL,
											"."
										]
									}) : null
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 border-t border-line px-6 py-10 md:px-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-7 max-w-2xl text-caption leading-relaxed text-ink-faint",
					children: "Материалы на странице не являются публичной офертой. Партнёрство не осуществляет набор клиентов на массовой основе и не рассматривает заявки вне формы верификации. Решение о взаимодействии принимается в одностороннем порядке по итогам due diligence и может быть отклонено без объяснения причин."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6 text-micro text-ink-faint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: "header" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [PHONE_DISPLAY, " · Алматы"] })]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AsmanLanding, {});
}
//#endregion
export { Home as component };
