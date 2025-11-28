import "./Header.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    sendHeaderGoal("mainButtonOpenModal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sendHeaderGoal = (id: string) => {
    if (!window._tmr) return;

    let goal: string | null = null;

    switch (id) {
      case "features":
        goal = "scrollToNewOpportunities";
        break;
      case "cabinet":
        goal = "scrollToCabinet";
        break;
      case "monetization":
        goal = "scrollToMonetization";
        break;
      case "mainButtonOpenModal":
        goal = "mainButtonOpenModal";
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

  const handleScrollTo = (id: string) => {
    sendHeaderGoal(id);

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });



    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="Header">
      <nav className="Header__content">
        <picture className="pict" onClick={handleLogoClick}>
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
