import "./Center.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Center() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 60%",
          once: true,
        },
      });

      tl.from(".Center__content-textBlock", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".Center__content-imagesBlock-two img",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.3"
        )
        .from(
          [
            ".Center__content-imagesBlock-three > img",
            ".Center__content-imagesBlock-three-sub img",
          ],
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

    const sendCenterCommunityGoal = () => {
    if (!window._tmr) return;

    window._tmr.push({
      id: "3718190",
      type: "reachGoal",
      goal: "goToCommunity", 
    });
  };

  return (
    <section className="Center" ref={sectionRef} id="center-of-actions">
      <div className="Center__content">
        <div className="Center__content-textBlock">
          <p className="Center__content-textBlock-title">
            Будь в центре событий
          </p>
          <p className="Center__content-textBlock-subtitle">
            Присоединяйся к комьюнити авторов VK Видео: участвуй в конкурсах,
            выигрывай призы, приходи на вечеринки и узнавай новости первым
          </p>
          <a
            onClick={sendCenterCommunityGoal}

            href="https://vk.com/vkvideoauthors"
            className="Center__content-textBlock-btn"
            target="_blanc"
            rel="noopener noreferrer"
          >
            Перейти в сообщество для авторов
          </a>
        </div>

        <div className="Center__content-imagesBlock">
          <div className="Center__content-imagesBlock-two">
            <img src="/images/center-1.png" alt="" />
            <img src="/images/center-2.png" alt="" />
          </div>
          <div className="Center__content-imagesBlock-three">
            <img src="/images/center-3.png" alt="" />
            <div className="Center__content-imagesBlock-three-sub">
              <img src="/images/center-4.png" alt="" />
              <img src="/images/center-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
