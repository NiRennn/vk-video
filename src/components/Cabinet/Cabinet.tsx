import Button from "../Button/Button";
import "./Cabinet.scss";
import { useRef, useState, useLayoutEffect } from "react";
import Modal from "../Modal/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cabinet() {
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
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });

      tl.from(".Cabinet__content-top-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".Cabinet__content-top img",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".Cabinet__content-bot-first",
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".Cabinet__content-bot-second",
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".Cabinet-btnBlockWrapper",
          {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="Cabinet" id="cabinet" ref={sectionRef}>
      <div className="Cabinet__content">
        <div className="Cabinet__content-top">
          <h1 className="Cabinet__content-top-header">
            Кабинет автора —<br /> твоё пространство для творчества
          </h1>
          <div>
            <img src="/images/cab-note1.png" alt="" />
          </div>
        </div>

        <div
          className="Cabinet__content-bot"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          <div className="Cabinet__content-bot-first">
            <div className="Cabinet__content-bot-first-cabText">
              <div>
                <p className="cabText-title">Удобное управление контентом</p>
                <p className="cabText-subtitle">
                  Редактируй видео, сохраняй черновики, <br />
                  планируй публикации и создавай <br />
                  плейлисты <span>в пару кликов</span>
                </p>
              </div>
            </div>
            <div className="Cabinet__content-bot-first-cabImg">
              <picture className="p-cimg1">
                <img src="/images/cab-top.png" alt="" className="cimg1" />
              </picture>
            </div>
          </div>

          <div className="Cabinet__content-bot-second">
            <div className="Cabinet__content-bot-second-cabImg">
              <picture className="p-cimg2">
                <img src="/images/cab-bot.png" alt="" className="cimg2" />
              </picture>
            </div>

            <div className="Cabinet__content-bot-second-cabText">
              <div>
                <p className="cabText-title">Редактирование после публикации</p>
                <p className="cabText-subtitle">
                  Добавляй тайм-коды и ссылки, вырезай лишнее из видео даже
                  после публикации <span>— без потери лайков и просмотров</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Cabinet__dots">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              className={`Cabinet__dot ${activeSlide === i ? "is-active" : ""}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Перейти к блоку ${i + 1}`}
            />
          ))}
        </div>

        <div className="Cabinet-btnBlockWrapper">
          <div className="Cabinet-btnBlock">
            <Button text="Присоединиться&nbsp;к&nbsp;авторам" onClick={handleOpenModal} />
          </div>
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </section>
  );
}
