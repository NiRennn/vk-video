import { useEffect, useRef, useCallback } from "react";
import type React from "react";
import gsap from "gsap";
import "./Modal.scss";

type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const isClosingRef = useRef(false);

  const handleAnimateClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    const overlayEl = overlayRef.current;
    const modalEl = modalRef.current;

    if (!overlayEl || !modalEl) {
      onClose();
      return;
    }

    gsap
      .timeline({
        onComplete: () => {
          onClose();
        },
      })
      .to(modalEl, {
        y: -10,
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(
        overlayEl,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "<"
      );
  }, [onClose]);

  useEffect(() => {
    const overlayEl = overlayRef.current;
    const modalEl = modalRef.current;
    if (!overlayEl || !modalEl) return;

    gsap.set(overlayEl, { opacity: 0 });
    gsap.set(modalEl, { opacity: 0, y: -10, scale: 0.95 });

    gsap
      .timeline()
      .to(overlayEl, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(
        modalEl,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        },
        "<0.05"
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleAnimateClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleAnimateClose]);

  const onOverlayMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleAnimateClose();
    }
  };

  // function sendModalCreateChannel() {
  //   if (window._tmr) {
  //     window._tmr.push({
  //       id: "3718190",
  //       type: "reachGoal",
  //       goal: "createChannel",
  //     });
  //   }
  // }

  //   function sendModalAuthorize() {
  //   if (window._tmr) {
  //     window._tmr.push({
  //       id: "3718190",
  //       type: "reachGoal",
  //       goal: "authorize",
  //     });
  //   }
  // }

  return (
    <div
      className="Modal__overlay"
      ref={overlayRef}
      onMouseDown={onOverlayMouseDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-subtitle"
    >
      <div
        className="Modal"
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <img
          src="/icons/close.svg"
          alt="close"
          className="Modal__close-btn"
          onClick={handleAnimateClose}
        />
        <div className="Modal__content">
          <div className="Modal__content-top">
            <p className="Modal__content-top-title">
              Станьте автором прямо сейчас!
            </p>
            <p className="Modal__content-top-subtitle">
              Авторизуйтесь и создайте канал, чтобы начать свой путь в
              VK&nbsp;Видео
            </p>
          </div>
          <div className="Modal__content-bot">
            <a
            // onClick={sendModalCreateChannel}
              className="Modal__content-bot-btn wh"
              href="https://vkvideo.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/plus.svg" alt="" />
              <p>Создать новый канал VK&nbsp;Видео</p>
            </a>
            <a
            // onClick={sendModalAuthorize}
              className="Modal__content-bot-btn gr"
              href="https://vkvideo.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Авторизоваться в VK&nbsp;Видео</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
