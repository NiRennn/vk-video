import "./Header.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="Header">
      <nav className="Header__content">
        <picture className="pict">
          <img
            src="/icons/VK-Video-icon.svg"
            alt=""
            className="Header__content-logo"
          />
        </picture>

        <button
          className={`Header__burger ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span className="Header__burger-line" />
          <span className="Header__burger-line" />
          <span className="Header__burger-line third" />
        </button>
        <div className={`Header__menu ${isMenuOpen ? "is-open" : ""}`}>
          <div className="Header__content-mid">
            <button
              className="Header__content-mid-item"
              onClick={() => handleScrollTo("features")}
            >
              Новые возможности
            </button>
            <button
              className="Header__content-mid-item"
              onClick={() => handleScrollTo("cabinet")}
            >
              Кабинет автора
            </button>
            <button
              className="Header__content-mid-item"
              onClick={() => handleScrollTo("monetization")}
            >
              Монетизация
            </button>
          </div>
          <button className="Header__content-btn" onClick={handleOpenModal}>
            Создать канал
          </button>
        </div>
      </nav>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </header>
  );
}
