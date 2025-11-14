import Button from "../Button/Button";
import "./Monet.scss";
import { useState, useLayoutEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: 1, label: "Монетизация" },
  { id: 2, label: "Статистика и метрики" },
  { id: 3, label: "Обучение и поддержка" },
];

export default function Monet() {
  const [active, setActive] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getTabZIndex = (id: number) => {
    if (id === active) return 3;

    if (
      (active === 1 && id === 2) ||
      (active === 2 && id === 3) ||
      (active === 3 && id === 2)
    ) {
      return 2;
    }

    return 1;
  };

  const getTabClassName = (id: number) => {
    const base = "Monet__content-main--tab";
    if (id === active) return `${base} is-active`;

    const z = getTabZIndex(id);
    if (z === 2) return `${base} is-second`;
    return `${base} is-third`;
  };

  const renderPanelById = (id: number) => {
    switch (id) {
      case 1:
        return (
          <>
            <div className="Monet__content-main--content--left">
              <div>
                <p>Твои просмотры — твой&nbsp;доход</p>
                <ul>
                  <li>
                    Простой старт. Подключи монетизацию быстро и без лишних
                    сложностей
                  </li>
                  <li>
                    Понятный расчёт. Узнай, как формируется твоё
                    вознаграждение за просмотры и рекламу.
                  </li>
                  <li>
                    Разные возможности: Используй дополнительные опции для
                    увеличения дохода: рекламные интеграции, монетизацию от VK
                    Видео и не только.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Monet__content-main--content--right">
              <picture className="p-m1">
                <img src="/images/monet-1.png" alt="" className="m1" />
              </picture>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="Monet__content-main--content--left">
              <div>
                <p>Твоя статистика&nbsp;— твой&nbsp;ключ к успеху</p>
                <ul>
                  <li>
                    Всё о твоём канале. Следи за динамикой просмотров, ростом
                    подписчиков и вовлечённостью аудитории.
                  </li>
                  <li>
                    Детальная аналитика. Изучай статистику по каждому видео:
                    откуда приходят зрители, сколько смотрят и где уходят.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Monet__content-main--content--right">
              <picture className="p-m2">
                <img src="/images/monet-2.png" alt="" className="m2" />
              </picture>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="Monet__content-main--content--left">
              <div>
                <p>Твои знания — твоя&nbsp;уверенность</p>
                <ul>
                  <li>
                    Поддержка рядом. Находи ответы на любые вопросы в Базе
                    знаний — всё удобно и понятно.
                  </li>
                  <li>
                    Обучение от экспертов. Осваивай инструменты платформы шаг за
                    шагом — от идеи до продвижения и монетизации.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Monet__content-main--content--right">
              <picture className="p-m3">
                <img src="/images/monet-31.png" alt="" className="m31" />
                <img src="/images/monet-32.png" alt="" className="m32" />
              </picture>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderActivePanel = () => renderPanelById(active);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".Monet__content-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".Monet__content-main-tabs .Monet__content-main--tab",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.3"
        )
        .from(
          ".Monet__content-main--content--left",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".Monet__content-main--content--right",
          {
            opacity: 0,
            x: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="Monet" id="monetization" ref={sectionRef}>
      <div className="Monet__content">
        <h1 className="Monet__content-header">
          Ещё больше возможностей, которые тебя ждут!
        </h1>

        <div className="Monet__content-main Monet__content-main--desktop">
          <div className="Monet__content-main-tabs">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                style={{ zIndex: getTabZIndex(tab.id) }}
                className={getTabClassName(tab.id)}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className="Monet__content-main--content">
            {renderActivePanel()}
          </div>
        </div>

        <div className="Monet__content-main Monet__content-main--mobile">
          {TABS.map((tab) => {
            const isOpen = active === tab.id;

            return (
              <div
                key={tab.id}
                className={`Monet__mobile-item ${
                  isOpen ? "Monet__mobile-item--open" : ""
                }`}
              >
                <div
                  className={`Monet__content-main--tab Monet__content-main--tab--mobile ${
                    isOpen ? "is-active" : ""
                  }`}
                  onClick={() => setActive(isOpen ? 0 : tab.id)}
                >
                  {tab.label}
                </div>

                <div className="Monet__mobile-panel">
                  <div className="Monet__content-main--content Monet__content-main--content--mobile">
                    {renderPanelById(tab.id)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Monet-btnBlock">
        <Button text="Присоединиться&nbsp;к&nbsp;авторам" onClick={handleOpenModal} />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </section>
  );
}
