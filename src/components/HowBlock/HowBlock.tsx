import Button from "../Button/Button";
import "./HowBlock.scss";
import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Modal/Modal";


gsap.registerPlugin(ScrollTrigger);

export default function HowBlock() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, clientWidth } = el;
    if (!clientWidth) return;

    const index = Math.round(scrollLeft / clientWidth);
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const { clientWidth } = el;
    el.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".HowBlock__container-step"
      );

      gsap.set(cards, {
        opacity: 0,
        y: 40,
      });

      ScrollTrigger.create({
        trigger: ".HowBlock__container-stepBlock",
        start: "top 75%", 
        once: true,     
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.25, 
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="HowBlock" ref={sectionRef}>
      <div className="HowBlock__container">
        <h1 className="HowBlock__container-header">
          Как стать автором VK&nbsp;Видео?
        </h1>

        <div
          className="HowBlock__container-stepBlock"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          <div className="HowBlock__container-step s1">
            <span className="HowBlock__container-step--badge b1">Шаг 1</span>
            <div className="step-wrap">
              <div className="HowBlock__container-step--textblock">
                <p className="HowBlock__container-step--title t1">
                  Создай
                  <br />
                  свой канал
                </p>
                <p className="HowBlock__container-step--subtitle st1">
                  Установи главное фото, загрузи обложку и добавь описание
                </p>
              </div>

              <img src="/images/how-1.png" alt="" className="how-i1" />
            </div>
          </div>

          <div className="HowBlock__container-step s2">
            <span className="HowBlock__container-step--badge b2">Шаг 2</span>
            <div className="step-wrap">
              <div className="HowBlock__container-step--textblock">
                <p className="HowBlock__container-step--title t2">
                  Начни публиковать
                  <br />
                  видео
                </p>
                <p className="HowBlock__container-step--subtitle st2">
                  Загружай ролики, делись идеями и находи первых зрителей
                </p>
              </div>
              <img src="/images/how-2.png" alt="" className="how-i2" />
            </div>
          </div>

          <div className="HowBlock__container-step s3">
            <span className="HowBlock__container-step--badge b3">Шаг 3</span>
            <div className="step-wrap">
              <div className="HowBlock__container-step--textblock">
                <p className="HowBlock__container-step--title t3">
                  Развивайся
                  <br />и зарабатывай
                </p>
                <p className="HowBlock__container-step--subtitle st3">
                  Используй аналитику, чтобы расти и монетизировать свой контент
                </p>
              </div>
              <img src="/images/how-3.png" alt="" className="how-i3" />
            </div>
          </div>
        </div>

        <div className="HowBlock__dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              className={`HowBlock__dot ${
                activeSlide === i ? "is-active" : ""
              }`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Перейти к шагу ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="HowBlock-btnBlock">
        <Button text="Присоединиться&nbsp;к&nbsp;авторам" onClick={handleOpenModal}/>
      </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
      
    </section>
  );
}
