import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./WhyBlock.scss";

export default function WhyBlock() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const cards = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>(".WhyBlock__container-cards")
    );

    const listeners: {
      card: HTMLElement;
      enter: () => void;
      leave: () => void;
    }[] = [];

    cards.forEach((card) => {
      const image = card.querySelector<HTMLImageElement>(
        ".WhyBlock__container-imageBlock img"
      );
      if (!image) return;

      gsap.set(image, { scale: 1, transformOrigin: "center center" });

      const onEnter = () => {
        gsap.to(image, {
          scale: 1.04,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const onLeave = () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      listeners.push({ card, enter: onEnter, leave: onLeave });
    });

    return () => {
      listeners.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section className="WhyBlock" ref={rootRef} id="features">
      <div className="WhyBlock__container">
        <h1 className="WhyBlock__container-header">
          Почему VK&nbsp;Видео — твой лучший выбор?
        </h1>
        <div className="WhyBlock__container-cardBlocks">
          <div className="WhyBlock__container-cards top">
            <div className="WhyBlock__container-imageBlock">
              <picture className="p-img1">
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/why-1-mobile.png"
                />
                <img src="/images/why-11.png" alt="" className="img1" />
              </picture>
            </div>
            <div className="WhyBlock__container-textBlock">
              <p className="WhyBlock__container-textBlock-title">
                Более 39&nbsp;000&nbsp;000 зрителей уже здесь
              </p>
              <p className="WhyBlock__container-textBlock-subtitle">
                Твой контент увидят{" "}
                <span style={{ color: "#FFFFFF" }}>миллионы</span> — делись
                идеями и находи свою аудиторию
              </p>
            </div>
          </div>

          <div className="WhyBlock__container-cards mid">
            <div className="WhyBlock__container-textBlock">
              <p className="WhyBlock__container-textBlock-title">
                Возможность зарабатывать с самого старта
              </p>
              <p className="WhyBlock__container-textBlock-subtitle">
                На платформе действует прозрачная программа монетизации видео, а
                VK Donut позволяет получать{" "}
                <span style={{ color: "#FFFFFF" }}>
                  {" "}
                  доход с первого дня
                </span>
              </p>
            </div>
            <div className="WhyBlock__container-imageBlock">
              <picture className="p-img2">
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/why-2-mobile.png"
                />
                <img src="/images/why-2.png" alt="" className="img2" />
              </picture>
            </div>
          </div>

          <div className="WhyBlock__container-cards bot">
            <div className="WhyBlock__container-imageBlock">
              <picture className="p-img3">
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/why-3-mobile.png"
                />
                <img src="/images/why-3.png" alt="" className="img3" />
              </picture>
            </div>

            <div className="WhyBlock__container-textBlock">
              <p className="WhyBlock__container-textBlock-title">
                Все инструменты для роста
              </p>
              <p className="WhyBlock__container-textBlock-subtitle">
                Управляй контентом, следи за статистикой и развивай канал в
                удобном Кабинете автора
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
