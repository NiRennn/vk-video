import { useState, useRef, useEffect } from "react";
import type { FaqCategory } from "./faqData";
import { faqData } from "./faqData";
import "./Faq.scss";

interface FaqProps {
  categories?: FaqCategory[];
}

export const Faq: React.FC<FaqProps> = ({ categories = faqData }) => {
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [openItemIds, setOpenItemIds] = useState<string[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => categories[0]?.id
  );

const handleToggleItem = (id: string) => {
  setOpenItemIds((prev) => {
    const isOpen = prev.includes(id);
    const next = isOpen
      ? prev.filter((openId) => openId !== id)
      : [...prev, id];

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);

      if (isOpen) {
        url.hash = "";
      } else {
        url.hash = `faq-${id}`;
        
        const el = document.getElementById(`faq-${id}`);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

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
  if (!window.location.hash) return;

  const rawHash = window.location.hash.slice(1);
  if (!rawHash.startsWith("faq-")) return;

  const itemId = rawHash.replace("faq-", "");

  const category = categories.find((cat) =>
    cat.items.some((item) => item.id === itemId)
  );
  if (!category) return;

  setActiveCategoryId(category.id);

  setOpenItemIds((prev) =>
    prev.includes(itemId) ? prev : [...prev, itemId]
  );

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
