import React from "react";
import Bap from "../../assets/herobgres.png";
import Bird from "../../assets/bird.png";
import child from "../../assets/children.svg";
import teen from "../../assets/teen.svg";
import elder from "../../assets/elder.svg";
import rightarr from "../../assets/rightarr.svg";
import playms from "../../assets/playms.png";
import monitor from "../../assets/monitor.svg";
import diagram from "../../assets/diagram.svg";
import star from "../../assets/star.png";
import news from "../../assets/newspaper.svg";
import usr1 from "../../assets/usr1.png";
import usr2 from "../../assets/usr2.png";
import usr3 from "../../assets/usr3.png";
import card1 from "../../assets/card1.png";
import book from "../../assets/book.png";
import desk from "../../assets/desk.png";
import boy from "../../assets/boy.png";
import contentlogo from "../../assets/contentlogo.svg";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <img className="res" src={Bap} alt="" />
          <div className="container">
            <div className="hero__wrapper">
              <div className="content">
                <h1>
                  Образовательная платформа
                  <br />
                  ХОД Future Academy
                </h1>

                <p>Актуальные знания для новичков и профессионалов</p>
              </div>
            </div>
          </div>
        </section>

        <section className="statistics">
          <div className="container">
            <div className="statistics__wrapper">
              <div className="statistics__desc">
                <h2>Кем вы хотите стать?</h2>
                <p>
                  Пора найти себя и выбрать подходящий курс :) <br /> <br />{" "}
                  Удачи!
                </p>
                <img src={Bird} alt="" />
              </div>

              <div className="content__sec">
                <ul className="content__nav">
                  <li className="content_nav_card">
                    <img src={child} alt="" />
                    <div className="">
                      <h3>Дети</h3>
                      <p>8 — 14 лет</p>
                    </div>
                  </li>
                  <li className="content_nav_card">
                    <img src={teen} alt="" />
                    <div className="">
                      <h3>Подростки</h3>
                      <p>14 — 18 лет</p>
                    </div>
                  </li>
                  <li className="content_nav_card">
                    <img src={elder} alt="" />
                    <div className="">
                      <h3>Взрослые</h3>
                      <p>18 — ∞ </p>
                    </div>
                  </li>
                </ul>

                <div className="sections">
                  <p>Робототехника</p>
                  <p>Создание игр</p>
                  <p>Web-разработка</p>
                  <p>Мультимедиа</p>
                  <p>Шахматы</p>
                  <p>3D-моделирование и дизайн</p>
                  <p>Английский язык</p>
                  <p>Блогинг</p>
                  <p>Soft skills</p>
                </div>

                <img className="playms" src={playms} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="shop">
          <div className="container">
            <div className="shop__wrapper">
              <h2>
                Актуальные знания от признанных экспертов рынка для новичков и
                практикующих специалистов.
              </h2>

              <div className="results">
                <div className="card">
                  <b>600</b>
                  <p>Курсов</p>
                </div>
                <div className="card">
                  <b>82</b>
                  <p>
                    Ведущих <br /> преподавателей
                  </p>
                </div>
                <div className="card">
                  <b>14 795</b>
                  <p>Выпускников</p>
                </div>
              </div>

              <div className="result_content">
                <div className="first_card">
                  <div className="first">
                    <b>25</b>
                    <p> ноябрь</p>
                  </div>

                  <div className="second">
                    <h4>День открытых дверей </h4>
                    <p>
                      Приглашаем всех желающих на бесплатную экскурсию в мир
                      востребованных профессий и полезных навыков
                    </p>
                  </div>
                  <button>
                    Записаться <img src={rightarr} alt="" />
                  </button>
                </div>

                <div className="second_content">
                  <div className="first">
                    <img src={monitor} alt="" />
                    <h3>Программы обучения</h3>
                    <p>
                      В списке наших курсов вы сможете найти профессию и занятие
                      по душе, изучить новое и получить практические знания,
                      которые помогут получить работу мечты.
                    </p>
                    <button className="second_button">
                      Подробнее <img src={rightarr} alt="" />
                    </button>
                  </div>
                  <div className="wrapper">
                    <div className="second">
                      <div className="first_card">
                        <img src={news} alt="" />
                        <p>Новости Академии</p>
                      </div>

                      <div className="second_card">
                        <img src={diagram} alt="" />
                        <p>Мир IT</p>
                      </div>
                    </div>

                    <div className="third_card">
                      <img src={contentlogo} alt="" />

                      <div className="third_card_content">
                        <h3>Попробуй!</h3>
                        <p>
                          Пройдите тест и узнайте свои способности в сфере
                          информационных технологий
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feedback">
          <div className="container">
            <div className="feedback__wrapper">
              <h2>Отзывы наших студентов</h2>

              <ul className="card_list">
                <li className="card_list_item">
                  <div className="top">
                    <img src={usr1} alt="" />
                    <div className="">
                      <h3>Имя Фамилия</h3>
                      <p>Студент курса «WEB-разработчик»</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    feugiat nisl at augue dapibus, id tristique lorem placerat.
                    Curabitur pellentesque est bibendum urna facilisis varius.
                    In hac habitasse platea dictumst. In ut dui sodales.
                  </p>
                  <div className="mark">
                    <img src={star} alt="" />
                    <p>4,87 / 5</p>
                  </div>
                </li>
                <li className="card_list_item">
                  <div className="top">
                    <img src={usr2} alt="" />
                    <div className="">
                      <h3>Имя Фамилия</h3>
                      <p>Студент курса «WEB-разработчик»</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    feugiat nisl at augue dapibus, id tristique lorem placerat.
                    Curabitur pellentesque est bibendum urna facilisis varius.
                  </p>
                  <div className="mark">
                    <img src={star} alt="" />
                    <p>4,87 / 5</p>
                  </div>
                </li>
                <li className="card_list_item">
                  <div className="top">
                    <img src={usr3} alt="" />
                    <div className="">
                      <h3>Имя Фамилия</h3>
                      <p>Студент курса «WEB-разработчик»</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    feugiat nisl at augue dapibus, id tristique lorem placerat.
                    Curabitur pellentesque est bibendum urna facilisis varius.
                    In hac habitasse platea dictumst. In ut dui sodales.
                  </p>
                  <div className="mark">
                    <img src={star} alt="" />
                    <p>4,87 / 5</p>
                  </div>
                </li>
                <li className="card_list_item">
                  <div className="top">
                    <img src={usr3} alt="" />
                    <div className="">
                      <h3>Имя Фамилия</h3>
                      <p>Студент курса «WEB-разработчик»</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    feugiat nisl at augue dapibus, id tristique lorem placerat.
                    Curabitur pellentesque est bibendum urna facilisis varius.
                    In hac habitasse platea dictumst. In ut dui sodales.
                  </p>
                  <div className="mark">
                    <img src={star} alt="" />
                    <p>4,87 / 5</p>
                  </div>
                </li>
                <li className="card_list_item">
                  <div className="top">
                    <img src={usr3} alt="" />
                    <div className="">
                      <h3>Имя Фамилия</h3>
                      <p>Студент курса «WEB-разработчик»</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    feugiat nisl at augue dapibus, id tristique lorem placerat.
                    Curabitur pellentesque est bibendum urna facilisis varius.
                    In hac habitasse platea dictumst. In ut dui sodales.
                  </p>
                  <div className="mark">
                    <img src={star} alt="" />
                    <p>4,87 / 5</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="welcome">
          <div className="container">
            <div className="welcome__wrapper">
              <h2>Добро пожаловать в Академию будущего ХОД</h2>

              <ul className="welcome_cad_list">
                <li className="welcome_card_list_item">
                  <img src={card1} alt="" />

                  <p>
                    Передовой подход к образовательному <br /> процессу
                  </p>
                </li>

                <li className="welcome_card_list_item">
                  <img src={book} alt="" />

                  <p>Непрерывное усовершенствование и пополнение базы курсов</p>
                </li>

                <li className="welcome_card_list_item">
                  <img src={desk} alt="" />

                  <p>Непрерывное усовершенствование и пополнение базы курсов</p>
                </li>
                <li className="welcome_card_list_item">
                  <img src={boy} alt="" />

                  <p>Непрерывное усовершенствование и пополнение базы курсов</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
