import { useState, useRef, useEffect } from "react";
import type { FaqCategory } from "./faqData";
import { faqData } from "./faqData";
import "./Faq.scss";

interface FaqProps {
  categories?: FaqCategory[];
}

export const Faq: React.FC<FaqProps> = ({ categories = faqData }) => {
  // const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [openItemIds, setOpenItemIds] = useState<string[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => categories[0]?.id
  );

  // теперь тут будем хранить просто id вопроса (а не hash-строку)
  const currentFaqIdRef = useRef<string | null>(null);

  const handleToggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const isOpen = prev.includes(id);
      const next = isOpen
        ? prev.filter((openId) => openId !== id)
        : [...prev, id];

      if (typeof window !== "undefined") {
        try {
          const url = new URL(window.location.href);

          if (isOpen) {
            // закрыли вопрос: убираем faq из query
            url.searchParams.delete("faq");
            // scrollTo оставляем "faq", чтобы при перезагрузке попасть в блок FAQ
            currentFaqIdRef.current = null;
          } else {
            // открыли вопрос: ?scrollTo=faq&faq=<id>
            url.searchParams.set("scrollTo", "faq");
            url.searchParams.set("faq", id);

            currentFaqIdRef.current = id;
          }

          window.history.replaceState(null, "", url.toString());
        } catch (e) {
          console.error(e);
        }
      }

      return next;
    });
  };

  const sendSidebarGoal = (categoryId: string) => {
    if (!window._tmr) return;

    let goal: string | null = null;

    switch (categoryId) {
      case "channel":
        goal = "scrollToFaqChannel";
        break;
      case "publishing":
        goal = "scrollToFaqPublishing";
        break;
      case "monetization":
        goal = "scrollToFaqMonetization";
        break;
      case "statistics":
        goal = "scrollToFaqStatistics";
        break;
      case "cabinet":
        goal = "scrollToFaqCabinet";
        break;
      case "support":
        goal = "scrollToFaqSupport";
        break;
      default:
        goal = null;
    }

    if (!goal) return;

    window._tmr.push({
      id: "3718190",
      type: "reachGoal",
      goal: goal,
    });
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    sendSidebarGoal(categoryId);

    const el = document.getElementById(`faq-section-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Открытие нужного вопроса при заходе по ссылке
  // https://example.com/?scrollTo=faq&faq=my-question-id
  useEffect(() => {
    if (typeof window === "undefined") return;

    let itemId: string | null = null;

    try {
      const url = new URL(window.location.href);
      const faqParam = url.searchParams.get("faq");

      if (faqParam) {
        itemId = faqParam;
      } else if (window.location.hash) {
        // опциональный fallback для старых ссылок вида #faq-my-question-id
        const rawHash = window.location.hash.slice(1);
        if (rawHash.startsWith("faq-")) {
          itemId = rawHash.replace("faq-", "");
        }
      }
    } catch (e) {
      console.error(e);
    }

    if (!itemId) return;

    const category = categories.find((cat) =>
      cat.items.some((item) => item.id === itemId)
    );
    if (!category) return;

    setActiveCategoryId(category.id);
    setOpenItemIds((prev) =>
      prev.includes(itemId!) ? prev : [...prev, itemId!]
    );

    currentFaqIdRef.current = itemId;

    const el = document.getElementById(`faq-${itemId}`);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [categories]);

  // Обновляем ?faq=... при скролле по открытому FAQ
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!openItemIds.length) return;

      const offset = 140;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const openElements: HTMLElement[] = openItemIds
        .map((id) => document.getElementById(`faq-${id}`) as HTMLElement | null)
        .filter((el): el is HTMLElement => !!el);

      if (!openElements.length) return;

      let bestEl: HTMLElement | null = null;

      openElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (bottom < 0 || top > viewportHeight) return;

        if (!bestEl) {
          bestEl = el;
          return;
        }

        const bestRect = bestEl.getBoundingClientRect();
        const bestTop = bestRect.top;

        if (top <= offset && bestTop > offset) {
          bestEl = el;
        } else if (top <= offset && bestTop <= offset) {
          if (top > bestTop) bestEl = el;
        } else if (top > offset && bestTop > offset) {
          if (top < bestTop) bestEl = el;
        }
      });

      if (!bestEl) return;

      // id элемента в DOM: "faq-my-question-id"
      const fullId = (bestEl as HTMLElement).id;
      const itemId = fullId.replace("faq-", "");

      if (currentFaqIdRef.current === itemId) return;

      currentFaqIdRef.current = itemId;

      try {
        const url = new URL(window.location.href);
        url.searchParams.set("faq", itemId);
        // scrollTo не трогаем, оставляем "faq"
        window.history.replaceState(null, "", url.toString());
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openItemIds, categories]);

  return (
    <section className="faq" id="faq">
      <div className="faq-h1-wrapper">
        <h1 className="faq-h1">
          Отвечаем <br /> на популярные вопросы
        </h1>
      </div>

      <div className="faq__inner">
        <aside className="faq__sidebar">
          <p className="faq__sidebar-title">Основные разделы:</p>
          <ul className="faq__categories">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className={
                    "faq__category-btn" +
                    (category.id === activeCategoryId
                      ? " faq__category-btn--active"
                      : "")
                  }
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="faq__content">
          {categories.map((category) => (
            <div
              key={category.id}
              id={`faq-section-${category.id}`}
              className="faq__category-section"
            >
              <h2 className="faq__title">{category.title}</h2>

              <div className="faq__items">
                {category.items.map((item) => {
                  const isOpen = openItemIds.includes(item.id);
                  return (
                    <article
                      key={item.id}
                      id={`faq-${item.id}`}
                      className={
                        "faq__item" + (isOpen ? " faq__item--open" : "")
                      }
                    >
                      <div className="faq__item-header-wrapper">
                        <div className="faq__item-header-btn-wrapper">
                          <button
                            type="button"
                            className="faq__item-header"
                            onClick={() => handleToggleItem(item.id)}
                            aria-expanded={isOpen}
                          >
                            <span className="faq__item-question">
                              {item.question}
                            </span>
                          </button>
                        </div>

                        <button className="faq__item-btn-icon">
                          <img
                            onClick={() => handleToggleItem(item.id)}
                            className="faq__item-icon"
                            src={
                              isOpen
                                ? "/icons/faq-minus.svg"
                                : "/icons/faq-plus.svg"
                            }
                            alt=""
                          />
                        </button>
                      </div>

<div
  className={
    "faq__item-body" + (isOpen ? " faq__item-body--open" : "")
  }
>
  <div className="faq__item-body-inner">
    {item.content}
  </div>
</div>

                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
