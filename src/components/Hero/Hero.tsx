import Button from "../Button/Button";
import "./Hero.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="Hero">
      <div className="Hero__content">
        <h1 className="Hero__content-header">
          Начни свой путь <br /> к популярности и доходу в&nbsp;VK&nbsp;Видео
        </h1>
        <div className="Heo__content-imgBlock">
          <img
            src="/images/hero-lebedev.png"
            alt=""
            className="Hero__content-lebedev"
          />
          <img
            src="/images/hero1.png"
            alt=""
            className="Hero__content-img n1"
          />
          <img
            src="/images/hero2.png"
            alt=""
            className="Hero__content-img n2"
          />
          <img
            src="/images/hero3.png"
            alt=""
            className="Hero__content-img n3"
          />
          <img
            src="/images/hero4.png"
            alt=""
            className="Hero__content-img n4"
          />
          <img
            src="/images/hero5.png"
            alt=""
            className="Hero__content-img n5"
          />
        </div>
      </div>
      <div className="Hero-btnBlock">
        <Button
          text="Создать&nbsp;канал"
          onClick={handleOpenModal}
          btnGoal="button1"
        />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </section>
  );
}
