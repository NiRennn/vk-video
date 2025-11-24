import type { ReactNode } from "react";
import "./Faq.scss";

export interface FaqItem {
  id: string;
  question: string;
  content: ReactNode;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}
 
export const faqData: FaqCategory[] = [
  {
    id: "channel",
    title: "Канал в VK Видео",
    items: [
      {
        id: "how-to-create-channel",
        question: "Как создать канал",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Создание канала — это обязательный шаг для всех, кто хочет стать
              автором VK&nbsp;Видео. Только так вы сможете делиться контентом,
              набирать аудиторию и зарабатывать на своём творчестве.
            </p>

            <p className="faq-demi">В веб-версии VK&nbsp;Видео</p>
            <ul className="faq-ul faq-mb24">
              <li className="faq-li">
                <span className="faq-demi">Откройте раздел </span>«Мои каналы» →
                «Создать канал».
              </li>
            </ul>
            <div className="faq-imgBlockD faq-mb44">
              <img
                src="/faq/create-channel-desktop-1.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/create-channel-desktop-2.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="faq-demi faq-mb6">
              В мобильном приложении VK&nbsp;Видео
            </p>
            <ul className="faq-ul faq-mb24">
              <li className="faq-li">
                <span className="faq-demi">Откройте раздел</span> «Моё» → «Мои
                каналы» → «Создать канал».
              </li>
            </ul>

            <img
              src="/faq/create-channel-desktop-two.png"
              alt=""
              className="faq-imgD faq-mb24"
              loading="lazy"
              decoding="async"
            />

            <p className="faq-p">
              После создания канала у вас автоматически появится
              сообщество&nbsp;ВКонтакте — настроить его поможет отдельная{" "}
              <a href="#" className="faq-link">
                статья.
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "how-to-style-channel",
        question: "Как оформить канал",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Оформление&nbsp;помогает каналу выделиться и сформировать первое
              впечатление у зрителей. Сделайте его ярким и привлекательным
            </p>

            <p className="faq-demi faq-mb6">Установите главное фото</p>
            <p className="faq-p faq-mb44">
              Нажмите «Загрузить фотографию» при создании канала.
              <br />
              Минимальный размер главного изображения —
              400&nbsp;×&nbsp;400&nbsp;px.
              <br />
              Размер миниатюры — 200&nbsp;×&nbsp;200&nbsp;pх.
            </p>

            <p className="faq-demi faq-mb6">Загрузите обложку</p>
            <p className="faq-p faq-mb12">
              Чтобы установить обложку канала VK&nbsp;Видео:
            </p>

            <ul className="faq-ul faq-mb24">
              <li className="faq-li faq-mb24">
                <span className="faq-demi">В веб-версии </span>откройте канал и
                нажмите на кнопку «Настройка канала» → «Обложка и фото» →
                «Изменить обложку».
              </li>
              <li className="faq-li">
                <span className="faq-demi">В мобильном приложении </span>
                откройте канал и нажмите на шестерёнку → «Изменить обложку»
              </li>
            </ul>
            <div className="faq-imgBlockD faq-mb24">
              <img
                src="/faq/create-channel-desktop-3.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/create-channel-desktop-4.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="faq-demi faq-mb6">Добавьте описание</p>

            <p className="faq-p faq-mb6">
              Расскажите, о чём ваш канал и чем вы занимаетесь — достаточно пары
              коротких, цепляющих предложений.
            </p>
            <img
              src="/faq/create-channel-desktop-5.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
    ],
  },

  {
    id: "publishing",
    title: "Публикация видео",
    items: [
      {
        id: "publish-video",
        question: "Как опубликовать видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Уже создали канал в VK&nbsp;Видео? Пора выложить первый ролик!
            </p>
            <p className="faq-demi faq-mb6">В веб-версии VK&nbsp;Видео</p>
            <ol className="faq-ul faq-ul-number faq-mb44">
              <li className="faq-li">
                Нажмите «+»&nbsp;в&nbsp;правом верхнем углу → «Загрузить видео».
              </li>
              <li className="faq-li">Выберите нужный канал.</li>
            </ol>
            <div className="faq-mb24 faq-imgBlockD">
              <img
                src="/faq/create-channel-desktop-6.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/create-channel-desktop-7.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
            </div>

            <ol className="faq-ul faq-ul-number faq-mb24" start={4}>
              <li className="faq-li">Прикрепите видеофайл.</li>
              <li className="faq-li">
                Добавьте название и описание ролика, задайте настройки. Здесь же
                можно загрузить обложку видео.
              </li>
              <li className="faq-li">Нажмите «Опубликовать».</li>
            </ol>

            <img
              src="/faq/create-channel-desktop-8.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />

            <p className="faq-demi faq-mb6">
              В мобильном приложении VK&nbsp;Видео
            </p>

            <ol className="faq-ul faq-ul-number faq-mb44">
              <li className="faq-li">
                Нажмите «Создать» внизу экрана → «Загрузить видео».
              </li>
              <li className="faq-li">Выберите видеофайл.</li>
              <li className="faq-li">
                Добавьте название и описание ролика, задайте настройки.
              </li>
              <li className="faq-li">
                Выберите нужный канал и нажмите «Опубликовать”.
              </li>
            </ol>
            <img
              src="/faq/create-channel-desktop-9.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
      {
        id: "save-draft",
        question: "Как сохранить черновик видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Если&nbsp;вы&nbsp;не&nbsp;готовы опубликовать ролик сразу
              после&nbsp;загрузки и&nbsp;хотите вернуться
              к&nbsp;его&nbsp;редактированию позже, сохраните видео
              как&nbsp;черновик.
              <br />
              <br />
              Для&nbsp;этого нажмите «Сохранить как&nbsp;черновик» в&nbsp;правом
              нижнем углу загрузчика. Все&nbsp;внесённые изменения сохранятся
              автоматически. Черновики можно будет найти в&nbsp;разделе
              «Мои&nbsp;видео» в&nbsp;Кабинете автора.
            </p>

            <img
              src="/faq/save-draft-desktop-10.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
      {
        id: "private-video",
        question: "Как настроить приватность видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb12">
              На этапе публикации выберите, кто может смотреть и комментировать
              ваш ролик:
            </p>
            <ul className="faq-ul faq-ul-dot faq-mb24 faq-g12">
              <li className="faq-li-demi">Все пользователи</li>
              <li className="faq-li-demi">Подписчики канала</li>
              <li className="faq-li-demi">Редакторы и администраторы</li>
              <li className="faq-li-demi">У кого есть ссылка</li>
              <li className="faq-li-demi">
                Доны — если у вас подключён{" "}
                <a
                  href="https://vk.com/donuts"
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VK&nbsp;Donut
                </a>
              </li>
            </ul>
            <div className="faq-imgBlockD faq-mb24">
              <img
                src="/faq/private-video-desktop-1.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/private-video-desktop-2.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="faq-p faq-mb44">
              Настройки приватности можно изменить и после публикации видео —
              для этого нажмите «Редактировать» у конкретного ролика.
            </p>
          </div>
        ),
      },
      {
        id: "create-playlist-channel",
        question: "Как создать плейлист на своём канале",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Плейлисты&nbsp;— это&nbsp;отличный способ сделать ваш&nbsp;контент
              максимально удобным для&nbsp;зрителей! С&nbsp;их&nbsp;помощью
              вы&nbsp;можете группировать ролики по&nbsp;тематикам, сезонам
              и&nbsp;не&nbsp;только.
            </p>
            <p className="faq-demi faq-mb6">В веб-версии VK&nbsp;Видео</p>
            <ul className="faq-ul faq-ul-dot faq-mb24">
              <li className="faq-li">
                Откройте свой канал в VK&nbsp;Видео и нажмите «Добавить» →
                «Создать плейлист».
              </li>
            </ul>

            <img
              src="/faq/create-playlist-channel-desktop-1.png"
              alt=""
              className="faq-mb44 faq-imgD"
              loading="lazy"
              decoding="async"
            />

            <p className="faq-demi faq-mb6">
              В мобильном приложении VK&nbsp;Видео
            </p>
            <ul className="faq-ul faq-ul-dot faq-mb24">
              <li className="faq-li">
                Нажмите на три точки у нужного видео → «Добавить в плейлист» →
                «Создать плейлист».
              </li>
            </ul>
            <img
              src="/faq/create-playlist-channel-desktop-1.png"
              alt=""
              className="faq-mb24 faq-imgD"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb44">
              После создания канала у вас автоматически появится
              сообщество&nbsp;ВКонтакте — настроить его поможет эта{" "}
              <a
                href="https://vk.com/@authors-kak-oformit-soobschestvo"
                className="faq-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                статья.
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "add-playlist-channel",
        question: "Как добавить видео в плейлист на своём канале",
        content: (
          <div className="faq-div">
            <p className="faq-demi faq-mb6">В веб-версии VK&nbsp;Видео</p>
            <ol className="faq-ul faq-ul-number faq-mb24">
              <li className="faq-li">
                Как добавить видео в плейлист на своём канале
              </li>
              <li className="faq-li">
                Выберите нужный плейлист в разделе «Плейлист»
              </li>
            </ol>
            <img
              src="/faq/add-playlist-channel-desktop-10.png"
              alt=""
              className="faq-mb44 faq-imgD"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-demi faq-mb6">
              В мобильном приложении VK&nbsp;Видео
            </p>

            <ol className="faq-ul faq-ul-number faq-mb24">
              <li className="faq-li">
                Откройте раздел «Видео» на своём канале.
              </li>
              <li className="faq-li">
                Нажмите на три точки у опубликованного видео →«Добавить в
                плейлист».
              </li>
              <li className="faq-li">Выберите нужный плейлист.</li>
            </ol>
            <img
              src="/faq/add-playlist-channel-desktop-11.png"
              alt=""
              className="faq-mb44 faq-imgD"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
      {
        id: "connect-video",
        question: "Как привязать клип к видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              С&nbsp;помощью клипов вы&nbsp;можете привлекать внимание зрителей
              к&nbsp;своим роликам, а&nbsp;ещё&nbsp;расширять аудиторию.
              <br />
              <br />
              Привязать клип к&nbsp;видео можно как&nbsp;при&nbsp;публикации,
              так&nbsp;и&nbsp;после: для&nbsp;этого нажмите «Редактировать»
              у&nbsp;опубликованного ролика → «Привязать клип».
            </p>
            <img
              src="/faq/connect-video-desktop-12.png"
              alt=""
              className="faq-mb44 faq-imgD"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb44">
              К&nbsp;одному видео можно привязать до&nbsp;30&nbsp;клипов.
              <br />
              При&nbsp;привязке под&nbsp;описанием клипа появится кнопка
              «Перейти к&nbsp;полному видео». Если&nbsp;удалить видео, ссылка
              на&nbsp;него в&nbsp;клипе тоже&nbsp;пропадёт.
            </p>
          </div>
        ),
      },
      {
        id: "edit-video",
        question: "Редактирование видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb12">
              Управлять своими видео можно в&nbsp;Кабинете автора.
              Для&nbsp;этого перейдите в&nbsp;раздел «Мои&nbsp;каналы» →
              «Кабинет автора» → «Мой&nbsp;контент». Здесь вы&nbsp;можете
              управлять как&nbsp;опубликованными роликами,
              так&nbsp;и&nbsp;черновиками вместе с&nbsp;отложенными видео.
              Добавить скрин Мои&nbsp;видео
              <br />
            </p>

            <p className="faq-mb12 faq-demi">Что можно редактировать в видео</p>
            <p className="faq-mb12 faq-p">С любого устройства:</p>
            <ul className="faq-ul faq-ul-dot faq-mb24 faq-g12">
              <li className="faq-li-demi">Название</li>
              <li className="faq-li-demi">Описание</li>
              <li className="faq-li-demi">Обложку</li>
              <li className="faq-li-demi">Настройки приватности</li>
              <li className="faq-li-demi">Связку с клипом</li>
              <li className="faq-li-demi">Плейлист</li>
            </ul>
            <p className="faq-mb12 faq-p">
              Только в веб-версии VK&nbsp;Видео :
            </p>
            <ul className="faq-ul faq-ul-dot faq-mb12 faq-g12">
              <li className="faq-li-demi">Ссылки внутри видео</li>
              <li className="faq-li-demi">Субтитры</li>
            </ul>
            <p className="faq-p faq-mb24">
              Чтобы отредактировать видео в Кабинете автора, наведите на него
              курсор и нажмите на карандаш, либо откройте ролик и кликните на
              три точки → «Редактировать».
            </p>
            <div className="faq-imgBlockD faq-mb44">
              <img
                src="/faq/what-edit-video-desktop-13.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/what-edit-video-desktop-14.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/what-edit-video-desktop-15.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ),
      },
      {
        id: "add-timecodes",
        question: "Как добавить тайм-коды",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb12">
              Чтобы зрителям было проще ориентироваться в вашем видео, разделите
              его на эпизоды. Для этого при публикации или редактировании
              добавьте в поле «Описание» тайм-коды с любого устройства:
            </p>
            <ol className="faq-ul-number faq-ul faq-mb24">
              <li className="faq-li">
                Укажите начало каждого фрагмента, начиная с 00:00, в формате
                мм:сс или чч:мм:сс.
              </li>
              <li className="faq-li">
                Добавьте тире и напишите название эпизода, которое отражает его
                содержание.
              </li>
            </ol>
            <p className="faq-p faq-mb24">
              Эпизоды должны быть самодостаточными по&nbsp;смыслу и&nbsp;идти
              друг за&nbsp;другом по&nbsp;хронологии,
              а&nbsp;их&nbsp;названия&nbsp;— цеплять и&nbsp;привлекать внимание.
            </p>
            <img
              src="/faq/add-timecodes-16.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
      {
        id: "delete-video",
        question: "Как удалить видео с канала",
        content: (
          <div className="faq-div">
            <p className="faq-demi faq-mb6">В веб-версии VK&nbsp;Видео</p>
            <ol className="faq-ul-number faq-ul faq-mb24">
              <li className="faq-li">Откройте нужное видео.</li>
              <li className="faq-li">
                Нажмите на три точки под роликом → «Удалить».
              </li>
            </ol>
            <img
              src="/faq/delete-video-desktop-17.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-demi faq-mb6">
              В мобильном приложении VK&nbsp;Видео
            </p>
            <ol className="faq-ul-number faq-ul faq-mb24">
              <li className="faq-li">Откройте нужное видео.</li>
              <li className="faq-li">
                Нажмите на три точки в&nbsp;верхнем правом углу. → «Удалить».
              </li>
            </ol>
            <img
              src="/faq/delete-video-desktop-18.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
      {
        id: "cut-video",
        question: "Как обрезать видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb12">
              Обрезать видео можно как&nbsp;во&nbsp;время загрузки,
              так&nbsp;и&nbsp;после&nbsp;публикации.
              <br />
              Чтобы&nbsp;изменить длину всего ролика или&nbsp;удалить
              из&nbsp;него конкретный фрагмент, потяните за&nbsp;границы
              на&nbsp;таймлайне или&nbsp;задайте тайминги вручную и&nbsp;нажмите
              на&nbsp;ножницы. После&nbsp;того, как&nbsp;вы&nbsp;обрежете
              уже&nbsp;опубликованный ролик,
              у&nbsp;вас&nbsp;есть&nbsp;два&nbsp;варианта:
            </p>
            <ol className="faq-ul-number faq-ul faq-mb24">
              <li className="faq-li faq-mb12">
                <span className="faq-demi">
                  Сохранить изменения в&nbsp;текущем видео.
                </span>{" "}
                После&nbsp;обработки зрителям станет доступна обновлённая
                версия, а&nbsp;лайки, комментарии и&nbsp;просмотры сохранятся.
              </li>
              <li className="faq-li">
                <span className="faq-demi">
                  Сохранить обрезанное видео как&nbsp;новое.
                </span>{" "}
                Отредактированный фрагмент откроется в&nbsp;загрузчике&nbsp;—
                и&nbsp;вы&nbsp;сможете добавить обложку, описание и&nbsp;другие
                данные. При&nbsp;этом исходный ролик останется
                без&nbsp;изменений.
              </li>
            </ol>
            <div className="faq-imgBlockD faq-mb44">
              <img
                src="/faq/cut-video-desktop-19.png"
                alt=""
                className="faq-imgD"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/faq/cut-video-desktop-20.png"
                alt=""
                className="faq-imgD faq-mb24"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ),
      },
    ],
  },

  {
    id: "monetization",
    title: "Монетизация",
    items: [
      {
        id: "connect-monet",
        question: "Как подключить монетизацию видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Монетизацию могут подключить открытые сообщества, которые
              публикуют видео и соответствуют{" "}
              <a
                href="https://vk.com/@authors-monetizaciya-video-pravila-programmy"
                className="faq-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                требованиям программы.
              </a>
            </p>
            <p className="faq-demi">Основные условия:</p>
            <ul className="faq-ul faq-ul-dot faq-mb24">
              <li className="faq-li ">
                В сообществе не менее 5&nbsp;000&nbsp;подписчиков.
              </li>
              <li className="faq-li ">
                Автор публикует оригинальный контент, права на который
                принадлежат ему. Оригинальность видео проверяют алгоритмы.
              </li>
              <li className="faq-li ">Контент не нарушает права третьих лиц</li>
            </ul>
            <p className="faq-p faq-mb24">
              Если все условия выполнены, откройте своё сообщество и перейдите в
              раздел «Монетизация» → «Монетизация видео» → «Подать заявку».
            </p>

            <img
              src="/faq/connect-monet-desktop-21.png"
              alt=""
              className="faq-imgD faq-mb24"
              loading="lazy"
              decoding="async"
            />

            <p className="faq-p faq-mb24">
              После этого сообщество пройдёт модерацию. Обычно она занимает
              около&nbsp;14&nbsp;дней, но в отдельных случаях может длиться
              дольше — если требуется более тщательная проверка оригинальности
              контента.
            </p>
          </div>
        ),
      },
      {
        id: "how-count-monet",
        question: "Как рассчитывается вознаграждение",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Монетизация работает по модели Revenue Share: авторы оригинального
              контента получают от 50 до 80% дохода от показов рекламы в своих
              видео. Форматы, длительность и количество рекламных вставок
              определяются автоматически и могут варьироваться
            </p>

            <p className="faq-demi">
              Для видео длиной от 1 минуты — базовый доход.
            </p>
            <p className="faq-p faq-mb24">
              Автор получает вознаграждение за каждый день, когда в его ролике
              показывается реклама.
            </p>
            <p className="faq-demi">
              Для видео длиной от 2 минут — повышенный доход.{" "}
            </p>
            <p className="faq-p faq-mb24">
              Если алгоритм отмечает контент как оригинальный, автору
              начисляется базовая выплата и дополнительное вознаграждение — до
              80% дохода. Подробнее — в{" "}
              <a
                href="https://vk.com/@authors-faq-novaya-programma-monetizacii-ot-vk-video"
                className="faq-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQ
              </a>{" "}
              программы.
            </p>
          </div>
        ),
      },
      {
        id: "how-get-monet",
        question: "Как получить выплату за видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb44">
              Вознаграждение по программе монетизации можно вывести в{" "}
              <a
                href="https://cashout.vk.com/#/empty-cabinet"
                className="faq-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                кабинете выплат.
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "donut-video",
        question: "VK Donut в VK Видео",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb12">
              VK&nbsp;Donut — это инструмент для монетизации вашего контента в
              VK Видео. Он позволяет зрителям поддерживать ваш канал на
              регулярной основе, благодарить финансово за конкретные видео или
              помогать достигать поставленных целей.
            </p>
            <p className="faq-p faq-mb12">
              Подключить VK&nbsp;Donut в VK&nbsp;Видео пока можно только через
              сообщество, которое связано с каналом. Для этого:
            </p>
            <ol className="faq-ul faq-ul-number faq-mb24">
              <li className="faq-li">Перейдите в сообщество.</li>
              <li className="faq-li">
                Откройте раздел «Монетизация» в меню справа.
              </li>
              <li className="faq-li">
                Выберите «VK&nbsp;Donut» → «Регулярная поддержка».
              </li>
              <li className="faq-li">
                Создайте первый уровень поддержки, указав его название и
                стоимость. Чтобы заинтересовать подписчиков, можно добавить
                обложку и описание.
              </li>
              <li className="faq-li">
                Укажите, куда выводить деньги → «Продолжить».
              </li>
            </ol>
            <p className="faq-p faq-mb12">
              Вы можете добавить до&nbsp;20&nbsp;уровней поддержки. Ограничений
              по количеству подписчиков для подключения VK&nbsp;Donut нет.
              Начать получать поддержку можно даже с небольшим количеством
              подписчиков. После подключения регулярной поддержки под каждым
              вашим видео и в канале VK&nbsp;Видео появится кнопка «Поддержать».
              Чтобы зрители заметили её, упоминайте о возможности поддержки в
              ваших роликах, добавляйте информацию в описания видео и на стену
              сообщества.
              <br />
              Если регулярная поддержка VK&nbsp;Donut уже подключена в вашем
              сообществе, ничего дополнительно делать не нужно — в канале VK
              Видео всё уже работает.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    id: "statistics",
    title: "Статистика",
    items: [
      {
        id: "channel-stat",
        question: "Как посмотреть статистику по всему каналу",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Статистику по&nbsp;каналу можно посмотреть в&nbsp;кабинете автора
              видео. Для&nbsp;этого перейдите в&nbsp;раздел «Видео», нажмите
              «Мои&nbsp;каналы» в&nbsp;левом меню, затем перейдите в&nbsp;свой
              канал и&nbsp;нажмите «Кабинет автора».
              <br />
              В&nbsp;кабинете автора доступны два&nbsp;основных раздела,
              где&nbsp;можно просмотреть статистику по&nbsp;всему каналу:
              «Обзор»и «Аналитика».
              <br />
              В&nbsp;разделе «Обзор» вы&nbsp;можете посмотреть общую информацию
              о&nbsp;вашем канале. Здесь отображается количество загруженных
              видео, число подписчиков и&nbsp;отписавшихся.
              Вы&nbsp;также&nbsp;увидите общее количество просмотров ваших видео
              и&nbsp;охваты, которые показывают, сколько уникальных
              пользователей посмотрело ваш&nbsp;контент. Раздел
              также&nbsp;показывает, какие видео стали самыми популярными,
              и&nbsp;из&nbsp;каких стран и&nbsp;городов вас&nbsp;смотрят.
              Для&nbsp;удобства, в&nbsp;правом верхнем углу можно выбрать
              период, за&nbsp;который вы&nbsp;хотите получить данные.
            </p>
            <img
              src="/faq/channel-stat-desktop-22.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb24">
              В&nbsp;разделе «Аналитика» вы&nbsp;найдёте более детальную
              информацию о&nbsp;вашем канале.
              <br />
              <br />
              Во&nbsp;вкладке «Обзор» отображается количество просмотров
              и&nbsp;уникальных зрителей за&nbsp;выбранный период, а&nbsp;также
              изменения в&nbsp;числе подписчиков и&nbsp;отписавшихся.
              Вы&nbsp;сможете увидеть, какие видео собрали наибольшее количество
              просмотров.
            </p>
            <img
              src="/faq/channel-stat-desktop-23.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb24">
              Во&nbsp;вкладке «Аудитория» представлена информация о ваших
              зрителях: их пол, возраст, города и страны, из которых они смотрят
              ваши видео. Вы также узнаете, какие устройства и платформы они
              используют.
            </p>
            <img
              src="/faq/channel-stat-desktop-24.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb24">
              Во&nbsp;вкладке «Взаимодействие» вы&nbsp;сможете увидеть, сколько
              зрителей поставили реакции вашим видео или&nbsp;отменили свою
              реакцию, сколько человек поделились видео и&nbsp;оставили
              комментарии.
            </p>
          </div>
        ),
      },
      {
        id: "video-stat",
        question: "Как посмотреть статистику по конкретному видео?",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Посмотреть аналитику конкретного видео можно через&nbsp;кабинет
              автора. В&nbsp;кабинете автора нужно открыть раздел
              «Мои&nbsp;видео» и&nbsp;навести курсор на&nbsp;название видео,
              у&nbsp;которого хотите посмотреть аналитику. Далее выберите
              «Посмотреть аналитику».
              <br />
              Здесь можно посмотреть общую информацию о&nbsp;статистике вашего
              видео и&nbsp;поведении зрителей.
              <br />
              Во&nbsp;вкладке «Обзор» отображается количество просмотров,
              охватов, а&nbsp;также лайков и&nbsp;комментариев. Сколько человек
              нажали «Это&nbsp;не&nbsp;интересно» под&nbsp;вашим видео
              и&nbsp;сколько человек поделились.
            </p>
            <img
              src="/faq/video-stat-desktop-26.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb24">
              Во&nbsp;вкладке «Аудитория» представлена информация о ваших
              зрителях: их пол, возраст, города и страны, из которых они смотрят
              ваши видео. Вы также узнаете, какие устройства и платформы они
              используют.
            </p>
            <img
              src="/faq/video-stat-desktop-27.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <p className="faq-p faq-mb24">
              Во&nbsp;вкладке «Взаимодействие» вы сможете увидеть, сколько
              зрителей поставили "нравится" вашим видео или отменили свою
              реакцию, сколько человек поделились видео и оставили комментарии.
            </p>
            <img
              src="/faq/video-stat-desktop-28.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
    ],
  },

  {
    id: "cabinet",
    title: "Кабинет автора",
    items: [
      {
        id: "what-cabinet",
        question: "Что такое кабинет автора?",
        content: (
          <div className="faq-div">
            <p className="faq-p faq-mb24">
              Это инструмент для управления и анализа контента на канале. В нем
              собраны все функции, необходимые для работы с каналом.
              <br />
              <br />В разделе «Обзор» отображается общая статистика по каналу:
              количество просмотров, подписчиков и самые популярные видео. Также
              показана информация о странах и городах, откуда смотрят ваши
              видео.
            </p>
            <img
              src="/faq/what-cabinet-desktop-29.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />

            <p className="faq-p faq-mb24">
              В разделе «Мои видео» можно просматривать опубликованные и
              отложенные видео, черновики, а также редактировать их описание,
              заголовок и настройки.
            </p>

            <img
              src="/faq/what-cabinet-desktop-30.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            {/* <div className="hug44"></div> */}

            <p className="faq-p faq-mb24">
              Раздел «Аналитика» содержит подробную информацию о статистике
              контента канала и поведении зрителей. Здесь можно увидеть пол и
              возраст зрителей, количество новых подписчиков и отписавшихся, а
              также узнать, из каких стран и городов смотрят видео. Кроме того,
              отображается информация о платформах и устройствах, с которых
              пользователи просматривают контент.
            </p>

            <img
              src="/faq/what-cabinet-desktop-31.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
            <div className="hug44"></div>

            <p className="faq-p faq-mb24">
              Через раздел «Настройки» можно изменить описание, обложку, фото
              профиля и внешний вид главной страницы канала.
            </p>

            <img
              src="/faq/what-cabinet-desktop-32.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />

            <div className="hug44"></div>

            <p className="faq-p faq-mb24">
              Если вы хотите переключиться между каналами, это можно сделать
              в&nbsp;левом верхнем углу интерфейса, выбрав нужный канал через
              селектор.
            </p>
            <img
              src="/faq/what-cabinet-desktop-33.png"
              alt=""
              className="faq-imgD faq-mb44"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      },
    ],
  },

  {
    id: "support",
    title: "Программы поддержки",
    items: [
      {
        id: "support-apps",
        question: "Какие программы поддержки у вас есть",
        content: (
          <div className="faq-div">
            <p className="faq-demi faq-mb6">Вы можете:</p>
            <ul className="faq-ul faq-ul-dot faq-mb24">
              <li className="faq-li">
                узнать больше о том, как развивать сообщество, в{" "}
                <a
                  href="https://vk.com/vk_authors"
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Базе знаний для авторов
                </a>
              </li>
              <li className="faq-li">
                пройти курсы от экспертов по блогингу в{" "}
                <a
                  href="https://authors.vk.company/"
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Школе авторов VK
                </a>
              </li>
              <li className="faq-li">
                присоединиться к{" "}
                <a
                  href="https://vk.company/ru/"
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  программе поддержки
                </a>{" "}
                для авторов видео с 10&nbsp;000&nbsp;подписчиков и более.
              </li>
            </ul>
            <p className="faq-p faq-mb44">
              После&nbsp;этого сообщество пройдёт модерацию. Обычно
              она&nbsp;занимает около&nbsp;14&nbsp;дней,
              но&nbsp;в&nbsp;отдельных случаях может длиться дольше&nbsp;—
              если&nbsp;требуется более тщательная проверка оригинальности
              контента.
            </p>
          </div>
        ),
      },
    ],
  },
];
