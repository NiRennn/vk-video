import { useState, useRef, useEffect } from "react";
import type { FaqCategory } from "./faqData";
import { faqData } from "./faqData";
import "./Faq.scss";

interface FaqProps {
  categories?: FaqCategory[];
}

const FAQ_PARAM = "faq";

export const Faq: React.FC<FaqProps> = ({ categories = faqData }) => {
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [openItemIds, setOpenItemIds] = useState<string[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => categories[0]?.id
  );

  const currentFaqParamRef = useRef<string | null>(null);

const handleToggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const isOpen = prev.includes(id);
      const next = isOpen
        ? prev.filter((openId) => openId !== id)
        : [...prev, id];

      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        const params = url.searchParams;

        if (isOpen) {
          // закрываем этот item — если он был в query, убираем
          if (params.get(FAQ_PARAM) === id) {
            params.delete(FAQ_PARAM);
            currentFaqParamRef.current = null;
          }
        } else {
          // открываем — записываем в query ?faq=id
          params.set(FAQ_PARAM, id);
          currentFaqParamRef.current = id;
        }

        url.search = params.toString();
        // hash не трогаем
        window.history.replaceState(null, "", url.toString());
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

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".faq__category-section"
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestRatio = 0;
        let currentId: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            const fullId = (entry.target as HTMLElement).id;
            const id = fullId.replace("faq-section-", "");
            currentId = id;
          }
        });

        if (currentId) {
          setActiveCategoryId(currentId);
        }
      },
      {
        root: null,
        rootMargin: "-140px 0px -50% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [categories]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    let itemId = url.searchParams.get(FAQ_PARAM);

    if (!itemId && window.location.hash) {
      const rawHash = window.location.hash.slice(1); // без '#'
      if (rawHash.startsWith("faq-")) {
        itemId = rawHash.replace("faq-", "");
      }
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

    currentFaqParamRef.current = itemId!;

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

      const fullId = (bestEl as HTMLElement).id; // "faq-<itemId>"
      const itemId = fullId.replace("faq-", "");

      if (currentFaqParamRef.current === itemId) return;

      currentFaqParamRef.current = itemId;

      const url = new URL(window.location.href);
      const params = url.searchParams;
      params.set(FAQ_PARAM, itemId);
      url.search = params.toString();
      // hash не трогаем
      window.history.replaceState(null, "", url.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // инициализация

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
                        className="faq__item-body"
                        style={{
                          maxHeight: isOpen
                            ? contentRefs.current[item.id]?.scrollHeight || 0
                            : 0,
                        }}
                      >
                        <div
                          ref={(el) => {
                            contentRefs.current[item.id] = el;
                          }}
                          className="faq__item-body-inner"
                        >
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
